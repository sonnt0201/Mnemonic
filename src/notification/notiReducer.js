import { NotiTypes } from "./NotiTypes";
export const notiReducer = (noti, action) => {
  let newNoti = noti;
  switch (action.type) {
    case NotiTypes.ADD:
      newNoti = [action.payload, ...newNoti];
      break;
    case NotiTypes.CLEAR:
      newNoti = [];
      break;
    default:
      break;
  }

  return newNoti
};
