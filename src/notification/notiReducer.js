import { NotiTypes } from "./NotiTypes";
export const notiReducer = (noti, action) => {
  let newNoti = [];
  switch (action.type) {
    case NotiTypes.ADD_NOTI:
      newNoti = [...noti, action.payload];
      break;
    case NotiTypes.CLEAR_NOTI:
      newNoti = [];
      break;
    default:
      break;
  }

  return newNoti
};
