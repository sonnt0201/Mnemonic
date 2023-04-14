import { Container, Row } from "react-bootstrap";
import { useTasks } from "../stores";
import { DeletedItem } from "./DeletedItem";
const DeletedPage = () => {
  const [tasks] = useTasks();
  return (
    <>
      <Container className="deleted-content">
        <Row>
          {tasks.map((task) => task.isDeleted && <DeletedItem task={task} />)}
        </Row>
      </Container>
    </>
  );
};
export default DeletedPage;
