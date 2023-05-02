import { Toast, ToastContainer, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNoti, NotiTypes } from "./notification";
import { useTasks } from "./stores";
import "./ToastNoti.css";
import { Link } from "react-router-dom";
export const ToastNoti = () => {
  const [show, setShow] = useState(false);
  
  const [tasks] = useTasks();
  const [noti, dispatchNoti] = useNoti();

  useEffect(() => {
    if (noti.length > 0) setShow(true);
  }, [noti]);

  // chạy thông báo khi bắt đầu vào App()
  useEffect(() => {
    // tìm các task sắp hết hạn
    const urgencies = tasks.filter(
      (task) =>
        !task.isDeleted &&
        !task.isDone &&
        task.countDaysLeft > 0 &&
        task.countDaysLeft <= 1
    );
    if (urgencies.length > 0)
      dispatchNoti({
        type: NotiTypes.ADD,
        payload: {
          content: (
            <p>
              Chào mừng bạn đã quay trở lại ! <br />
              <strong>
                {urgencies[0].name}
                {urgencies[1] ? ", " + urgencies[1].name : ""}
                {urgencies[2] ? ", " + urgencies[2].name : ""}
                {urgencies.length > 3
                  ? `và ${urgencies.length - 3} công việc khác`
                  : ""}{" "}
              </strong>
              còn chưa đầy một ngày nữa
            </p>
          ),
          link: "/mnemonic",
          time: new Date(),
        },
      });

    if (urgencies.length > 0) return;

    //  tìm các task chưa hoàn thành nếu không có task sắp hết hạn
    const pendingTasks = tasks.filter(
      (task) => !task.isDeleted && !task.isDone
    );
    if (pendingTasks.length > 0)
      dispatchNoti({
        type: NotiTypes.ADD,
        payload: {
          content: (
            <p>
              Chào mừng bạn đã quay trở lại ! <br />
              Bạn còn
              <strong>
                {" " + pendingTasks[0].name}
                {pendingTasks[1] ? ", " + pendingTasks[1].name : ""}
                {pendingTasks[2] ? ", " + pendingTasks[2].name : ""}
                {pendingTasks.length > 3
                  ? ` và ${pendingTasks.length - 3} công việc khác`
                  : ""}{" "}
              </strong>
              chưa hoàn thành
            </p>
          ),
          link: "/mnemonic",
          time: new Date(),
        },
      });
  }, []);

  return (
    <>
      <ToastContainer
        className="toast-container"
        style={{
         
        }}
      >
        <Toast
          className="toast"
          onClose={() => setShow(false)}
          show={show}
          delay={5000}
          autohide

         
        >
          <Toast.Header className="me-2 toast-header">
            <Spinner
              className="me-2 toast-spinner"
              animation="grow"
              variant="success"
              size="sm"
              
            />
            {/* <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            /> */}
            <strong className="me-auto">MNEMONIC</strong>
            <small>ngay bây giờ</small>
          </Toast.Header>
          <Toast.Body
            className="justify-content-left toast-body"
            style={{
              textAlign: "left",
            }}
          >
            {noti.length > 0 ? noti[0].content : ""}
           
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};
