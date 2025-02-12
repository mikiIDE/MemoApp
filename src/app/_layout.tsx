import { Stack } from "expo-router"

const Layout = () :JSX.Element=> {
    return <Stack screenOptions={{
        headerStyle:{
            backgroundColor: "#467FD3"
        },
        headerTintColor:"#FFFFFF",
        headerTitle:"Memo App",
        headerBackTitle:"Back",
        headerTitleStyle:{
            fontSize:22,
            fontWeight:"bold"
        }
    }}/>
}

export default Layout

// Slotを追加することで、レイアウトを画面端ギリギリまで操作できるようになる
// Stackを追加することで、ナビゲーションバー（画面上部）に戻るボタンが自動で提供される


