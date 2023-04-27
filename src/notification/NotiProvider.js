import { NotiContext, useNoti } from "./NotiContext"
import { notiReducer } from "./notiReducer";
import {notiInit} from "./notiInit"
export const NotiProvider = ({children}) => {
    const [noti, dispatchNoti] = useNoti(notiReducer, notiInit);
    return <>
        <NotiContext.Provider value={[noti, dispatchNoti]}>
            {children}
        </NotiContext.Provider>
    </>
}