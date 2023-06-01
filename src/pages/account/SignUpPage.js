import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { auth, signUp } from "../../account";
import { useEffect, useState } from "react";
import { Decoration } from "./Decoration";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AccountInput } from "./AccountInput";
import { addNewUserToStore } from "../../manager/firestore";
// import { addNewUserToStore } from "../../manager/firestore";
import './SignUpPage.css'
export const SignUpPage = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  return (
    <div className="account-page">
    
      <h3 className="greeting">
        WELCOME !! <br/>
      </h3>
        <AccountInput
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
        />
        
        <Button
          className="signup-button"
          variant="primary"
          // type="submit"
          onClick={(e) => {
            signUp({ username: username, password: password }).then(() => {
              addNewUserToStore();
              navigate("/mnemonic");
            });
          }}
        >
          Đăng kí tài khoản mới
        </Button>

        <Decoration />

        <p className="signup-hint">
        Chuyển về trang <Link to = "/mnemonic/signin">Đăng nhập</Link>
      </p>
     
    </div>
  );
};
