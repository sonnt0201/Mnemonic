import { useEffect } from "react"
import { auth, useUser } from "./account"


export const AuthListener = () => {
    const [user, setUser] = useUser();
    useEffect(() => {
        auth.onAuthStateChanged( (user) => {
            setUser(user);
            console.log(user);
        })
    },[])
    return null
}