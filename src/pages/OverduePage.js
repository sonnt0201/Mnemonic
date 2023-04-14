import { Container, Row } from "react-bootstrap";
import { Item } from "./Item";
import { useTasks } from "../stores";
const OverduePage = () => {
  const [tasks] = useTasks();

  return (
    <>
      <Container className="content">
        <Row>
          {tasks.map(
            (task) =>
              !task.isDeleted 
              && task.countDaysLeft <= 0 
              && !task.isDone
              && <Item task={task} />
          )}
        </Row>
      </Container>
    </>
  );
};

export default OverduePage;
