import { Card } from "react-bootstrap";
import './Message.css';
export const Message = ({ message }) => {
  return (
    <>
      <Card
        className={
          message.role === "user"
            ? "message user-message justify-content-end"
            : "message assistant-message justify-content-start"
        }
        style={{
          // width: `calc(min( ${message.content.length * 1}rem, 70% ))`
        }}
      >
        <Card.Body style={{}}>
          <h5>{message.content}</h5>
        </Card.Body>
      </Card>
      {/* <br /> */}
    </>
  );
};
