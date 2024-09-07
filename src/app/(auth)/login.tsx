import { View, Text, StyleSheet, TextInput, Pressable, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router';

const login = () => {
  return (
    <View style={styles.container}>

      <View>
        <Text style={{ fontSize: 20, textAlign: 'center' }}>"Welcome back to <Text style={{ fontWeight: '500' }}>Send-it"</Text></Text>
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
            <Text style={styles.text}>Username</Text>
            <TextInput style={styles.input} placeholder='Username'></TextInput>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.text}>Password</Text>
            <TextInput style={styles.input} placeholder='Password'></TextInput>
          </View>
        </View>

        <Pressable style={styles.loginBtn}>
          <Text style={{ color: "white", textAlign: 'center',fontWeight:'600' }}>Login</Text>
        </Pressable>
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
    marginTop: 40
  }
});

export default login