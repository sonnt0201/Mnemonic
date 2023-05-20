import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { auth, signUp } from "../../account";
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useNavigate } from "react-router-dom";
// import { addNewUserToStore } from "../../manager/firestore";

export const SignUpPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
 

  return (
    <>
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
              signUp({email: email, password: password}).then(() => {
                navigate("/mnemonic");
              })
            }}
          >
            đăng kí
          </Button>
        </Form>
      </>
    </>
  );
};
