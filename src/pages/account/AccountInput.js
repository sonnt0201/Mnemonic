import { Form } from "react-bootstrap";

export const AccountInput = ({username, setUsername,password, setPassword}) => {
  
    return (  <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Tên đăng nhập</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tên đăng nhập"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
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