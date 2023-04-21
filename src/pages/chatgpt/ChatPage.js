import { Stack, Button, Form, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { openAI } from "../../manager";
import { Message } from "./Message";
import "./ChatPage.css";
export const ChatPage = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  const handleSendMessage = async () => {
    setIsLoading(true);
    const newMessage = {
      role: "user",
      content: text,
    };

    //thêm mess vừa gửi vào array
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);

    // gọi api
    const responseMessage = await openAI.getAnswerFor([
      ...messages,
      newMessage,
    ]);

    // thêm mess nhận về vào array
    newMessages.push(responseMessage);
    setMessages(newMessages);
    setIsLoading(false);
  };

  return (
    <>
      <div
        className="chat-content"
        style={{
          marginBottom: "10rem",
        }}
      >
        {messages.map((message) => {
          if (!message) return <></>;
          return (
            <>
              <Message message={message} />
            </>
          );
        })}
      </div>

      <Form
        style={{
          position: "fixed",
          bottom: "2rem",
          left: "10%",
          width: "80%",
        }}
      >
        {isLoading && (
          <div className="spinners">
            <Spinner
              className="me-2"
              animation="grow"
              size="sm"
              variant="primary"
            />
            <Spinner
              className="me-2"
              animation="grow"
              size="sm"
              variant="danger"
            />
            <Spinner
              className="me-2"
              animation="grow"
              size="sm"
              variant="warning"
            />
          </div>
        )}
        <Stack direction = "horizontal" gap = {3}>

          <Form.Control
            className="chat-input"
            as="textarea"
            placeholder="Hỏi bất cứ điều gì"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                e.target.blur();
                setText("");
                handleSendMessage();
              }
            }}
          />

          <Button className="submit-button" variant = "success" style={{
            padding: "0.8rem",
            fontWeight: "bold",
            // backgroundColor:"#645CBB",
            borderWidth: "0"
            // fontSize: "1.2rem"
          }}>
            Gửi
          </Button>
        </Stack>
      </Form>
    </>
  );
};
