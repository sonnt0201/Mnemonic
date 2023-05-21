import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { auth, signUp } from "../../account";
import { useEffect, useState } from "react";


import { useNavigate } from "react-router-dom";
import { AccountInput } from "./AccountInput";
import { addNewUserToStore } from "../../manager/firestore";
// import { addNewUserToStore } from "../../manager/firestore";

export const SignUpPage = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  return (
    <>
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
            signUp({ username: username, password: password }).then(() => {
              addNewUserToStore();
              navigate("/mnemonic");
            });
          }}
        >
          đăng kí
        </Button>
      </>
    </>
  );
};
