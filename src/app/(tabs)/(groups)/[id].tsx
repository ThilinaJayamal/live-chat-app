import { View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity, FlatList, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { addDoc, collection, DocumentData, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../../config/firebaseConfig';
import { useAuth } from '../../../provider/AuthContext';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Chat = () => {
  const { id } = useLocalSearchParams();
  const { user } = useAuth();
  const [messages, setMessages] = useState<DocumentData[]>([]);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const msgCollectionRef = collection(FIRESTORE_DB, `groups/${id}/messages`);
    const q = query(msgCollectionRef, orderBy('createdAt', 'asc'));

    const unsubcribe = onSnapshot(q, (groups: DocumentData) => {
      //console.log(groups);
      const messages = groups.docs.map((doc: any) => {
        return { id: doc.id, ...doc.data() }
      });
      //console.log(messages);
      setMessages(messages);
    })
  }, [])

  const sendMessages = async () => {
    const msg = message.trim();

    if (msg.length === 0) {
      return;
    }

    const msgCollectionRef = collection(FIRESTORE_DB, `groups/${id}/messages`);
    await addDoc(msgCollectionRef, {
      message: msg,
      sender: user.uid,
      createdAt: serverTimestamp(),
    })

    setMessage("");
  }

  const renderMessages = ({ item }: { item: DocumentData }) => {

    const isMe = item.sender === user.uid;

    return (
      <View style={{
        backgroundColor: isMe ? '#fff' : "#4b5563",
        padding: 10,
        borderRadius: 20,
        width: "75%",
        alignSelf: isMe ? "flex-end" : "flex-start",
      }}>
        <View>
          <Text style={{ color: isMe ? '#000' : '#fff' }}>{item.message}</Text>
          <Text style={{
            color: isMe ? '#4b5563' : '#f9fafb',
            fontSize: 11,
            textAlign: 'right'
          }}>{item?.createdAt?.toDate()?.toLocaleDateString()}</Text>
        </View>

      </View>
    )
  }
  const image = { uri: 'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.pn' };
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../../../assets/background.png")} resizeMode="cover" style={{ flex: 1, padding: 10 }}>
        <FlatList keyExtractor={(item) => item.id} data={messages} renderItem={renderMessages} contentContainerStyle={{ gap: 10, paddingBottom: 20 }} showsVerticalScrollIndicator={false} />

        <View style={styles.inputContainer}>
          <TextInput value={message} placeholder='Message' multiline onChangeText={setMessage} style={styles.textInput} />

          <TouchableOpacity style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: "#0ea5e9",
            width: 45,
            height: 45,
            borderRadius: 25,
          }} onPress={() => sendMessages()}>
            <FontAwesome name="send" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  textInput: {
    flex: 1,
    borderColor: "#d1d5db",
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 14,
  }
})