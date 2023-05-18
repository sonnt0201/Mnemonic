import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { auth } from "../../account";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>

        <Button
          variant="primary"
          // type="submit"
          onClick={(e) => {
            
          }}
        >
          đăng kí
        </Button>

        <Button
        className="sign-in"
          variant="primary"
          // type="submit"
          onClick={e => {
            signInWithEmailAndPassword(auth, email, password);
          }}
        >
          đăng nhập
        </Button>

        <Button
          variant="primary"
          // type="submit"
          onClick={e => {
            
          }}
        >
          đăng xuất
        </Button>
      </Form>
    </>
  );
};

export default LoginPage;
