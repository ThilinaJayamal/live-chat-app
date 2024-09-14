import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../provider/AuthContext'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../config/firebaseConfig';

const Groups = () => {
  const { user } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getUserProfileData(user.uid);
  }, [])

  const getUserProfileData = async (docId: string) => {
    try {
      const docRef = doc(FIRESTORE_DB, 'users', docId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUsername(docSnap.data()?.username)
        setEmail(docSnap.data()?.email)
        return docSnap.data();
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.error('Error getting document:', error);
    }
  };

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 18 }}>{username}</Text>
      <Text style={{ fontSize: 18 }}>{email}</Text>
    </View>
  )
}

export default Groups