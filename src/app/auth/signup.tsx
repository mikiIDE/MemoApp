import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native"
import Button from "../../components/Button"

import { Link, router } from "expo-router"

import { useState } from "react"

import { auth } from "../../config"
import { createUserWithEmailAndPassword } from "firebase/auth"

const handlePress = (email: string, password: string): void => {
  // 登録処理
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => { //処理が成功した時
      console.log(userCredential.user.uid)
      router.replace("/memo/list")
    })
    .catch((error) => { //処理が失敗した時
      console.log(error)
      Alert.alert(error.message)
    })
}

const SignUp = (): JSX.Element => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>SignUp</Text>
                <TextInput
                style={styles.input}
                value={email}
                onChangeText={(text) => { setEmail (text)}} //コールバック関数
                // ⇧（textを受け取って、setEmail関数でemailという箱の中身を更新していく→TextInputのvalueとして使われる）
                autoCapitalize="none"
                keyboardType="email-address"
                placeholder="Email Address"
                textContentType="emailAddress"
                />
                <TextInput 
                style={styles.input} 
                value={password} 
                onChangeText={(text) => {setPassword(text)}}
                autoCapitalize="none"
                secureTextEntry //="true"
                placeholder="Password"
                textContentType="password"
                />
            <Button label={"submit"} onPress={() => {
              handlePress(email, password)
            }} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <Link href ="/auth/login" asChild replace>
          <TouchableOpacity>
          <Text style={styles.footerLink}>Log in here!</Text>
          </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F0F4F8"
  },
  inner: {
    paddingVertical:24,
    paddingHorizontal:47
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
    marginBottom:24
  },
  input:{
    backgroundColor:"#FFFFFF",
    borderWidth:1,
    borderColor:"#DDDDDD",
    height:48,
    padding:8,
    fontSize:16,
    marginBottom:16
  },
  footer:{
    flexDirection:"row"
  },
  footerText:{
    fontSize:14,
    lineHeight:24,
    marginRight:8
  },
  footerLink:{
    fontSize:14,
    lineHeight:24,
    color:"#467FD3"
  }
})

export default SignUp
