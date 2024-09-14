import { View, Text, Pressable, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { addDoc, collection, doc, DocumentData, onSnapshot } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../../config/firebaseConfig';
import { useAuth } from '../../../provider/AuthContext';
import { Link } from 'expo-router';

const GroupPage = () => {
  const [groupCollection, setGroupCollection] = useState(null);
  const { user } = useAuth();
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const ref = collection(FIRESTORE_DB, 'groups');
    setGroupCollection(ref);

    const unsubcribe = onSnapshot(ref, (groups: DocumentData) => {
      console.log(groups);
      const groupsData = groups.docs.map((doc: any) => {
        return { id: doc.id, ...doc.data() }
      });
      console.log(groupsData);
      setGroups(groupsData);
    })
  }, []);

  const startGroup = async () => {
    try {
      await addDoc(groupCollection, {
        name: 'Group 3',
        description: 'This is group three',
        creator: user.uid
      })
    }
    catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{}}>
        {
          groups.map((group) => {
            return (
              <Link key={group.id} href={`/(groups)/${group.id}`} asChild>
                <TouchableOpacity style={styles.groupCard}>
                  <Text>{group.name}</Text>
                  <Text>{group.description}</Text>
                </TouchableOpacity>
              </Link>
            )
          })
        }
      </ScrollView>
      <Pressable style={styles.fab} onPress={() => startGroup()}>
        <Ionicons name="add" size={28} color="#fff" />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#38bdf8',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 28
  },
  groupCard: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom:10,
    elevation: 1,
    borderRadius: 4,
  }
})

export default GroupPage