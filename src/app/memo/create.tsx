import { 
    View, StyleSheet, TextInput, KeyboardAvoidingView
 } from "react-native"

import CircleButton from "../../components/CircleButton"
import Icon from "../../components/Icon"

import { router } from "expo-router"

import { collection, addDoc } from "firebase/firestore"
import { db } from "../../config"


const handlePress = (): void => {
    addDoc(collection(db, "memos"),{
        bodyText:"test"
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
    return (
        <KeyboardAvoidingView behavior="height" style = {styles.container}>
            <View style = {styles.inputContainer}>
                <TextInput multiline style= {styles.input} value ="" />
                {/* 上のmultilineはiOS用 */}
            </View>
            <CircleButton onPress = {handlePress}>
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
