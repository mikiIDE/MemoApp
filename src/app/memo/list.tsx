import { View, StyleSheet, FlatList } from 'react-native'
import MemoListItem from "../../components/MemoListItem"
import CircleButton from "../../components/CircleButton"
// import { Feather } from "@expo/vector-icons"
import Icon from "../../components/Icon"
import LogOutButton from '../../components/LogOutButton'

import { useEffect, useState } from "react"

import { router, useNavigation } from "expo-router"

import { collection, onSnapshot, query, orderBy } from "firebase/firestore"
import { db, auth } from "../../config"

import { type Memo } from "../../../types/memo"

const handlePress = () :void => {
    router.push("/memo/create")
}

const List = ():JSX.Element => {
    const [memos, setMemos] = useState<Memo[]>([])
    const navigation = useNavigation()
    // useEffectを使って、画面が読み込まれた時に１度だけ実行する
    // 副作用だと思えばOK
    useEffect(() => {
        navigation.setOptions({
            headerRight:() => { return<LogOutButton />}
        })
    }, []) //[]配列には依存関係（影響を受ける対象）を記述する
    useEffect(() => {
        if(auth.currentUser === null){ return }
        const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
        const q = query(ref, orderBy("updatedAt","desc"))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const remoteMemos: Memo[] = []
            snapshot.forEach((doc) => {
                console.log("memo", doc.data())
                const { bodyText, updatedAt } = doc.data()
                remoteMemos.push({
                    id:doc.id,
                    bodyText,
                    updatedAt
                })
            })
            setMemos(remoteMemos)
        })
        return unsubscribe
    },[])
    return (
    <View style={styles.container}>
        <FlatList 
        data={memos}
        renderItem={({ item }) => { return <MemoListItem memo={item} />}}
        />
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
