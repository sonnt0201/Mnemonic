import { Form } from "react-bootstrap";
import "./AccountInput.css"
export const AccountInput = ({username, setUsername,password, setPassword, onClick}) => {
  
    return (  <Form className = "account-input" onClick={onClick}>
       
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="label">Tên đăng nhập</Form.Label>
          <Form.Control
          autoComplete="off"
            className="input-field"
            type="text"
            placeholder="Tên đăng nhập"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="label">Mật khẩu</Form.Label>
          <Form.Control
          className="input-field"
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            Mật khẩu bao gồm ít nhất 6 kí tự
          </Form.Text>
        </Form.Group>
      </Form>)
}