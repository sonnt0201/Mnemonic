import { NotiContext } from "./NotiContext"
import { notiReducer } from "./notiReducer";
import {notiInit} from "./notiInit"
import { useReducer } from "react";
export const NotiProvider = ({children}) => {
    const [noti, dispatchNoti] = useReducer(notiReducer, notiInit);
    return <>
        <NotiContext.Provider value={[noti, dispatchNoti]}>
            {children}
        </NotiContext.Provider>
    </>
}