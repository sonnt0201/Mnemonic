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

import "./LoginPage.css";
export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [user] = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      // alert(user.uid);
      navigate("/mnemonic/account");
    }
  });

  return (
    <div className="account-page">
      <h3 className="greeting">WELCOME !!</h3>
      <LoadingAnimation isActive={loading} />
      <AccountInput
        onClick={() => setError("")}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />

      {error && (
        <Alert variant="danger" className="alert" onClick={() => setError("")}>
          {error}
        </Alert>
      )}

      <Button
        className="signin-button "
        variant="primary"
        // size="lg"
        // type="submit"
        onClick={async (e) => {
          setLoading(true);
          signIn({ username: username, password: password })
            .then(() => {
              setLoading(false);
            })
            .catch((error) => {
              setError("Sai tên đăng nhập hoặc mật khẩu, hãy thử lại");
              setLoading(false);
            });
        }}
      >
        Đăng nhập
      </Button>

      <Decoration />
      <p className="signup-hint">
        Bạn chưa có tài khoản ? <Link to="/mnemonic/signup">Đăng kí</Link>
      </p>
    </div>
  );
};

export default LoginPage;
