import { loadFromLocalStorage } from "../utils";
import { UserContext } from "./UserContext"
import { useState } from "react";
export const UserProvider = ({children}) => {

    const [user, setUser] = useState(loadFromLocalStorage({key: "user"}) ? loadFromLocalStorage({key: "user"}) : null);
    return <UserContext.Provider value = {[user, setUser]} >
        {children}
    </UserContext.Provider>
}