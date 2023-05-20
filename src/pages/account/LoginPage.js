import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { auth, signIn, signInWithGoogle } from "../../account";
import { useEffect, useState } from "react";
import { useUser } from "../../account";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user] = useUser();
  const navigate = useNavigate();

  useEffect(() => {

    if (user) {
      alert(user.uid);
      navigate("/mnemonic/account");
    }
  })

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
            navigate("/mnemonic/signup")
          }}
        >
          Đăng kí
         
        </Button>

        <Button
        className="sign-in"
          variant="primary"
          // type="submit"
          onClick={e => {
            signIn({email: email, password: password}).then(() => {
              navigate("/mnemonic/")
            })
          }}
        >
          đăng nhập
        </Button>
        <Button
        className="sign-in"
          variant="primary"
          // type="submit"
          onClick={e => {
            signInWithGoogle().then(() => {
              navigate("/mnemonic/")
            })
          }}
        >
          đăng nhập  với google
        </Button>
        
      </Form>
    </>
  );
};

export default LoginPage;
