import { Stack } from "expo-router"

const Layout = () :JSX.Element=> {
    return <Stack/>
}

export default Layout

// Slotを追加することで、レイアウトを画面端ギリギリまで操作できるようになる
// Stackを追加することで、ナビゲーションバー（画面上部）に戻るボタンが自動で提供される
