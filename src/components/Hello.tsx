import { View, Text, StyleSheet, type TextStyle } from "react-native"

// コンポーネントの構成（中身がどういうデータなのか？）を明示している
interface Props {
    children:string
    bang?:boolean //?でオプショナル（指定しても指定しなくてもいい）
    style?: TextStyle
}

// Helloというコンポーネントを作成
const Hello = (props:Props): JSX.Element => {
    // const children = props.children 下の記述の方が、内容が増えたときに冗長になりづらい
    const{ children, bang, style } = props
  return (
    <View>
      <Text style={[styles.text, style]}> {/* 後ろに書いた内容の方が優先される！ */}
        Hello {children}{bang === true ? "!":""} {/* bangがtrueだったら”！”を、falseだったら””（空欄）を返す */}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "#ffffff",
    backgroundColor:'blue',
    fontSize:40,
    fontWeight:"bold",
    padding:16
  }
})

export default Hello
