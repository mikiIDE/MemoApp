import { View, Text, StyleSheet } from "react-native"

interface Props {
    children:string
}

const CircleButton = (props:Props) :JSX.Element => {
    const { children } = props
    return (
            <View style={styles.circleButton}>
                <Text style={styles.circleButtonLabel}>{children}</Text>
            </View>
            )
}

const styles = StyleSheet.create({
    circleButton:{
        width:64,
        height:64,
        borderRadius:32,
        backgroundColor:"#467FD3",
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        right:40,
        bottom:40,
        // 以下「shadow~...」はiOSのみに設定される
        shadowColor:"#000000",
        shadowOpacity:0.25,
        shadowRadius:8,
        shadowOffset:{ width: 0, height: 8 },
        // 以下はAndroidに設定される
        elevation:8
    },
    circleButtonLabel:{
    color:"#FFFFFF",
    fontSize:40,
    lineHeight:40
    }
})

export default CircleButton
