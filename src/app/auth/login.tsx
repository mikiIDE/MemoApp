import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native"
import Button from "../../components/Button"

// ⬇️ 画面切り替えを行うためのインポート
import { Link, router } from "expo-router"

import { useState } from "react"

const handlePress = (): void => {
  // ログイン処理を後ほど記述
  // pushを使うとStackに履歴を追加することになるため
  // Backボタンを表示させたくない場合replace（ページの置き換え）を利用する
  router.replace("/memo/list")
}

const LogIn = (): JSX.Element => {
  // emailが値を保持する箱、setEmailが値を変更する関数
  // useStateの直後にはいるのが（初期値）
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Login</Text>
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

        <Button label={"Submit"} onPress={handlePress} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <Link href="/auth/signup" asChild>
          <TouchableOpacity>
          <Text style={styles.footerLink}>Sign up here!</Text>
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

export default LogIn
