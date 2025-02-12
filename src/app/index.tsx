import { Redirect,router } from "expo-router"
import { useEffect  } from "react"

// ⬇️ログイン状態を監視するため
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../config"

const Index = ():JSX.Element => {
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user !== null ){
                router.replace("/memo/list")
            }
        })
    })
    return <Redirect href="auth/login" />
}



export default Index
