import { Container, Row } from "react-bootstrap";
import { Item } from "./Item";
import { useTasks } from "../stores";
const DonePage = () => {
  const [tasks] = useTasks();
  return (
    <>
      <Container className="content">
        <Row>
        {tasks.map(
            (task) =>
              !task.isDeleted 
              && task.isDone
              && <Item task={task} />
          )}
        </Row>
      </Container>
    </>
  );
};
export default DonePage;
