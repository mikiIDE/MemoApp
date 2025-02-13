import { 
    View, StyleSheet, TextInput
 } from "react-native"

import CircleButton from "../../components/CircleButton"
import Icon from "../../components/Icon"

import { router } from "expo-router"

import { collection, addDoc, Timestamp } from "firebase/firestore"
import { db, auth } from "../../config"

import { useState } from "react"

import KeyboardAvoidingView from "../../components/KeyboardAvoidingView"

const handlePress = (bodyText : string ): void => {
    // ユーザーごとのメモ登録
    if (auth.currentUser === null){ return }
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`) //``バックティック
    addDoc(ref,{
        bodyText,
        updatedAt: Timestamp.fromDate(new Date())
    })
        .then((docRef) => {
            console.log("success", docRef.id)
            router.back()
        })
        .catch((error) => {
            console.log(error.message)
        })
    // ⬇️asyncを追加し、下記のような非同期処理でも記述可能
    // 今回はシンプルなので上記で進む（複雑な入れ子処理が必要な場合は下記を推奨）
    // await addDoc(collection(db, "memos"), {
    //     bodyText:"test 2"
    // })
    //     .catch((error) => {
    //         console.log(error.message)
    //     })
    // router.back()
}

const Create = ():JSX.Element => {
    const [bodyText, setBodyText] = useState("")
    return (
        <KeyboardAvoidingView style = {styles.container}>
            <View style = {styles.inputContainer}>
                <TextInput 
                multiline style= {styles.input} 
                value = {bodyText}
                onChangeText= {(text) => { setBodyText(text) }}
                autoFocus />
                {/* 上のmultilineはiOS用 */}
            </View>
            <CircleButton onPress = {() => { handlePress(bodyText) }}>
                <Icon name ="check" size={40} color="#FFFFFF" />
            </CircleButton>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    inputContainer:{
        paddingVertical:32,
        paddingHorizontal:27,
        flex:1
    },
    input:{
        flex:1,
        textAlignVertical:"top", // ←これはAndroid専用
        fontSize:16,
        lineHeight:24
    }
})

export default Create
