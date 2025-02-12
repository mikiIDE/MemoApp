import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native"
import Button from "../../components/Button"

// ⬇️ 画面切り替えを行うためのインポート
import { Link, router } from "expo-router"

const handlePress = (): void => {
  // ログイン処理を後ほど記述
  // pushを使うとStackに履歴を追加することになるため
  // Backボタンを表示させたくない場合replace（ページの置き換え）を利用する
  router.replace("/memo/list")
}

const LogIn = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Login</Text>
        <TextInput style={styles.input} value="Email address" />
        <TextInput style={styles.input} value="Password" />
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
