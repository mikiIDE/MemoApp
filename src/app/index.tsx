import { View, StyleSheet } from 'react-native'
import Header from "../components/Header " // 自分で作成したものだから？{}なし！
import MemoListItem from "../components/MemoListItem"
import CircleButton from "../components/CircleButton"

const Index = ():JSX.Element => {
    return (
        // まずは全体を囲むView
    <View style={styles.container}>

{/* コンポーネント */}
    <Header />
        <View>
{/* コンポーネント */}
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
        </View>
{/* コンポーネント */}
        <CircleButton>+</CircleButton>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1, //この要素を画面いっぱいに広げる、という指示
        backgroundColor:'#FFFFFF'
    }
})

export default Index
