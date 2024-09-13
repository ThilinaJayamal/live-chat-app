import { View, Text, StyleSheet, TextInput, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { Redirect, router } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../config/firebaseConfig';


const login = () => {

  const [email, setEmail] = useState("ahjayalath1@gmail.com");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("12345678");
  const [loarding, setLoarding] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setLoarding(true);
      const user = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
      if (user) {
        return (
          <Redirect href={"/(tabs)/groups"} />
        )
      }
    }
    catch (error) {
      if (error.code === 'auth/invalid-credential') {
        setError("*Please check your username or password again.*");
      }
    }
    finally {
      setLoarding(false);
    }
  }

  return (
    <View style={styles.container}>

      <View>
        <Text style={{ fontSize: 20, textAlign: 'center' }}>"Welcome back to <Text style={{ fontWeight: '500' }}>Chat-Now"</Text></Text>
        <View>
          <Image source={require("../../../assets/chat.png")}
            style={{
              width: '100%',
              height: 200,
              resizeMode: 'contain'
            }} />
        </View>

        <View style={{ gap: 15 }}>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Email</Text>
            <TextInput style={styles.input} placeholder='Email' value={email} onChangeText={setEmail}></TextInput>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.text}>Password</Text>
            <TextInput style={styles.input} placeholder='Password' value={password} onChangeText={setPassword}></TextInput>
          </View>

          <Text style={{ textAlign: 'center', color: '#ef4444' }}>{error}</Text>
        </View>

        <Pressable style={styles.loginBtn} onPress={loarding ? () => { } : () => handleLogin()}>
          <Text style={{ color: "white", textAlign: 'center', fontWeight: '600' }}>{loarding ? "Loading..." : "Login"}</Text>
        </Pressable>
        {/*<ActivityIndicator/>*/}

      </View>

      <View>
        <Text style={{ fontSize: 16, textAlign: 'center' }}>Don't have an account? <Text style={{ fontWeight: '500' }} onPress={() => router.push('/register')}>Create free account</Text></Text>
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
    marginTop: 10,
  }
});

export default login