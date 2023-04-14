import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
function MainNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/">MNEMONIC</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <Link to="/">Trang chủ</Link>
            </Nav.Link>
            <Nav.Link href="#link">
              <Link to="/done-page">Hoàn thành</Link>
            </Nav.Link>
            <Nav.Link href="#link">
              <Link to="/pending-page">Còn hạn</Link>
            </Nav.Link>

            <NavDropdown title="Khác" id="basic-nav-dropdown">
              <NavDropdown.Item href="#link">
                <Link to="/overdue-page">Quá hạn</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Cài đặt</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link to="/deleted-page">Thùng rác</Link>
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.2">
                Chế độ tối
              </NavDropdown.Item> */}
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Thông tin</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
