import { View, StyleSheet } from 'react-native'
import MemoListItem from "../../components/MemoListItem"
import CircleButton from "../../components/CircleButton"
// import { Feather } from "@expo/vector-icons"
import Icon from "../../components/Icon"
import LogOutButton from '../../components/LogOutButton'

import { useEffect } from "react"

import { router, useNavigation } from "expo-router"

const handlePress = () :void => {
    router.push("/memo/create")
}

const List = ():JSX.Element => {
    const navigation = useNavigation()
    // useEffectを使って、画面が読み込まれた時に１度だけ実行する
    useEffect(() => {
        navigation.setOptions({
            headerRight:() => { return<LogOutButton />}
        })
    }, [])

    return (
        // まずは全体を囲むView
    <View style={styles.container}>

{/* コンポーネント */}
        <View>
{/* コンポーネント */}
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
        </View>
{/* コンポーネント */}
        <CircleButton onPress ={handlePress}>
            {/* <Feather name ="plus" size={40} /> */}
            <Icon name = "plus" size={40} color="#FFFFFF"/>
        </CircleButton>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1, //この要素を画面いっぱいに広げる、という指示
        backgroundColor:'#FFFFFF'
    }
})

export default List
