import { Container, Row } from "react-bootstrap";
import { Item } from "./Item";
import { useTasks } from "../stores";
const PendingPage = () => {
  const [tasks] = useTasks();
  return (
    <>
      <Container className="content">
        <Row>
        {tasks.map(
            (task) =>
              !task.isDeleted 
              && !task.isDone
              && task.countDaysLeft >= 0
              && <Item task={task} />
          )}
        </Row>
      </Container>
    </>
  );
};

export default PendingPage;
