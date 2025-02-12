import { 
    View, StyleSheet, TextInput, KeyboardAvoidingView
 } from "react-native"

import CircleButton from "../../components/CircleButton"
import Icon from "../../components/Icon"

import { router } from "expo-router"

const handlePress =(): void => {
    router.back()
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
