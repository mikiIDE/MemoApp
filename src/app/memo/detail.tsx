import { View, Text, ScrollView, StyleSheet } from "react-native"
// import { Feather } from "@expo/vector-icons" //アイコンのために読み込む！Featherはライブラリ名
import Icon from "../../components/Icon"

import CircleButton from "../../components/CircleButton"

import { router } from "expo-router"

const handlePress = ():void => {
    router.push("/memo/edit")
}


const Detail = () :JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2023年10月1日 10:00</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                    買い物リスト
                    書体やレイアウトなどを確認するために用います。
                    本文ようなので使い方を間違えると不自然に見えることもあるため要注意！
                </Text>
            </ScrollView>
            <CircleButton onPress={handlePress} style={{ top:160 }}>
                {/* <Feather name='plus' size={40} /> */}
                <Icon name="pencil" size={40} color="#FFFFFF" />
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FFFFFF"
    },
    memoHeader:{
        backgroundColor:"#467FD3",
        height:96,
        justifyContent:"center",
        paddingVertical:24,
        paddingHorizontal:19
    },
    memoTitle:{
        color:"#FFFFFF",
        fontSize:20,
        lineHeight:32,
        fontWeight:"bold"
    },
    memoDate:{
        color:"#FFFFFF",
        fontSize:12,
        lineHeight:16
},
memoBody:{
    paddingVertical:32,
    paddingHorizontal:27
},
memoBodyText:{
    fontSize:16,
    lineHeight:24,
    color:"#000000"
}
})

export default Detail
