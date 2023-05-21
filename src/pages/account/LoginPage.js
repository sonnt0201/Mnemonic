import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { auth, signIn, signInWithGoogle } from "../../account";
import { useEffect, useState } from "react";
import { useUser } from "../../account";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AccountInput } from "./AccountInput";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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

      <AccountInput
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />

      <Button
        variant="primary"
        // type="submit"
        onClick={(e) => {
          navigate("/mnemonic/signup");
        }}
      >
        Đăng kí
      </Button>

      <Button
        className="sign-in"
        variant="primary"
        // type="submit"
        onClick={(e) => {
          signIn({ username: username, password: password }).then(() => {
            navigate("/mnemonic/");
          });
        }}
      >
        đăng nhập
      </Button>
    </>
  );
};

export default LoginPage;
