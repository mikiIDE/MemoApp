import { 
    View, StyleSheet, TextInput
 } from "react-native"

import CircleButton from "../../components/CircleButton"
import Icon from "../../components/Icon"

import { router } from "expo-router"

import KeyboardAvoidingView from "../../components/KeyboardAvoidingView"


const handlePress = () :void =>{
    router.back()
}

const Edit = ():JSX.Element => {
    return (
        <KeyboardAvoidingView style = {styles.container}>
            <View style = {styles.inputContainer}>
                <TextInput multiline style= {styles.input} value ={"買い物\nリスト"} />
                {/* 上のmultilineはiOS用 */}
            </View>
            <CircleButton onPress={handlePress}>
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

export default Edit
