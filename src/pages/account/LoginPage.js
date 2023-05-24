import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { auth, signIn, signInWithGoogle } from "../../account";
import { useEffect, useState } from "react";
import { useUser } from "../../account";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AccountInput } from "./AccountInput";
import { Decoration } from "./Decoration";
import { LoadingAnimation } from "./LoadingAnimation";
import { Alert } from "react-bootstrap";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [user] = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      // alert(user.uid);
      navigate("/mnemonic/account");
    }
  });

  return (
    <>
      <h3 className="greeting">
        WELCOME !!
      </h3>
      <LoadingAnimation isActive = {loading}/>
      <AccountInput
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />

     {/* <Alert variant="danger">

     </Alert> */}

      <Button
        className="signin-button "
        variant="primary"
        // size="lg"
        // type="submit"
        onClick={(e) => {
          setLoading(true)
          signIn({ username: username, password: password }).then(() => {
            setLoading(false)
            navigate("/mnemonic");

          });
        }}
      >
        đăng nhập
      </Button>

        <Decoration/>
      <p className="signup-hint">
        Bạn chưa có tài khoản ? <Link to = "/mnemonic/signup">Đăng kí</Link>
      </p>
    </>
  );
};

export default LoginPage;
