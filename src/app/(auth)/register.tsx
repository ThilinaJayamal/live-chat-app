import { View, Text, StyleSheet, TextInput, Pressable, Image, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../config/firebaseConfig';

const register = () => {

  const [email, setEmail] = useState("ahjayalath1@gmail.com");
  const [username, setUsername] = useState("thilina");
  const [password, setPassword] = useState("12345678");
  const [loarding, setLoarding] = useState(false);

  const handleRegistration = async () => {
    try {
      setLoarding(true);
      const user = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
      console.log(user);
    }
    catch (error) {
      console.log("There was an error occurred:" + error);
    }
    finally{
      setLoarding(false);
    }
  }

  return (
    <View style={styles.container}>

      <View>

        <View>
          <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: '600' }}>Register Now!</Text>
          <View>
            <Image source={require("../../../assets/chat.png")}
              style={{
                width: '100%',
                height: 200,
                resizeMode: 'contain'
              }} />
          </View>
        </View>

        <View style={{ gap: 15 }}>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Email</Text>
            <TextInput style={styles.input} value={email} placeholder='Username' onChangeText={setEmail}></TextInput>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.text}>Username</Text>
            <TextInput style={styles.input} value={username} placeholder='Username' onChangeText={setUsername}></TextInput>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.text}>Password</Text>
            <TextInput style={styles.input} value={password} placeholder='Password' onChangeText={setPassword}></TextInput>
          </View>
        </View>

        {
          loarding ?
            (
              <Pressable style={styles.loginBtn}>
                <Text style={{ color: "white", textAlign: 'center', fontWeight: '600' }}>Loading...</Text>
              </Pressable>
            )
            /*<ActivityIndicator/>*/
            :
            (<Pressable style={styles.loginBtn} onPress={() => handleRegistration()}>
              <Text style={{ color: "white", textAlign: 'center', fontWeight: '600' }}>Register</Text>
            </Pressable>)
        }

      </View>

      <View>
        <Text style={{ fontSize: 16, textAlign: 'center' }}>Do you already have an account? <Text style={{ fontWeight: '500' }} onPress={() => router.push('/login')}>Sign in</Text></Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: "white",

  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    color: 'black'
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderColor: "black",
    borderRadius: 8,
    width: '100%',
    borderWidth: StyleSheet.hairlineWidth
  }
  ,
  inputContainer: {
    width: "100%",
    gap: 8,
  },
  loginBtn: {
    padding: 15,
    backgroundColor: 'black',
    borderRadius: 8,
    marginTop: 40
  }
});

export default register