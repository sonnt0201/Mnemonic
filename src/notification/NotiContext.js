import { createContext, useContext } from "react";

export const NotiContext = createContext();
export const useNoti = () => useContext(NotiContext);