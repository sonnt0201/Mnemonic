import { Button, Container, Row } from "react-bootstrap";
import { useTasks, ActionEnum } from "../stores";
import { DeletedItem } from "./DeletedItem";
import { useNoti, NotiTypes } from "../notification";
const DeletedPage = () => {
  const [tasks, dispatchTasks] = useTasks();
  const [noti, dispatchNoti] = useNoti();
  return (
    <>
      <Container className="deleted-content">
        <Button
        onClick={e => {
          // chạy function dọn dẹp
          dispatchTasks({
            type: ActionEnum.EMPTY_BIN,
            payload: "none"
          })

          // hiện thông báo
          dispatchNoti({
            type: NotiTypes.ADD,
            payload:{
              content: (
              <p>
                Đã dọn dẹp thùng rác
              </p>
            ),
            time: new Date(),
            link: "/mnemonic/deleted-page"
            }
             
          })
        }}>
          Dọn dẹp thùng rác
        </Button>
        <Row>
          {tasks.map((task) => task.isDeleted && <DeletedItem task={task} />)}
        </Row>
      </Container>
    </>
  );
};
export default DeletedPage;
