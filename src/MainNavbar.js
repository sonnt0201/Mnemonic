import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {Transition } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom";
import "./MainNavbar.css";

const PageEnum = Object.freeze({
  HOME: "/mnemonic",
  DONE: "/mnemonic/done-page",
  PENDING: "/mnemonic/pending-page",
  OVERDUE: "/mnemonic/overdue-page",
  DELETED: "/mnemonic/deleted-page",
  CHATGPT: "/mnemonic/chatgpt",
  SETTING: "Cài Đặt",
});
function MainNavbar() {
  const location = useLocation();
  const pageName = (pathname) => {
    switch (pathname) {
      case PageEnum.HOME:
        return "Trang Chủ";
      case PageEnum.DONE:
        return "Hoàn Thành";
      case PageEnum.OVERDUE:
        return "Quá Hạn";
      case PageEnum.DELETED:
        return "Thùng Rác";
      case PageEnum.PENDING:
        return "Chưa Xong";
      case PageEnum.CHATGPT:
        return "Chat";
      default:
        return "";
    }
  };
  return (
    <Navbar expand="lg" sticky="top" className="nav-bar">
      <Container>
        <Navbar.Brand className="app-name">
          <Link to="/mnemonic">MNEMONIC</Link>
        </Navbar.Brand>

        <Nav
          className="page-name"
          
        >
          <h2>{pageName(location.pathname)}</h2>
        </Nav>

        <Navbar.Toggle
          className="justify-content-end"
          aria-controls="basic-navbar-nav"
        />
        
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end navbar-collapse">
         
            {/* <Nav.Link>
              <Link to="/mnemonic/chatgpt"> Chat </Link>
            </Nav.Link> */}
            <Nav.Link>
              <Link to="/mnemonic/done-page">Hoàn thành</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/mnemonic/pending-page">Còn hạn</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/mnemonic/overdue-page">Quá hạn</Link>
            </Nav.Link>
            <NavDropdown
              title="Khác"
              id="basic-nav-dropdown"
              className="drop-down"
            >
              <NavDropdown.Item>Cài đặt</NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/mnemonic/deleted-page">Thùng rác</Link>
              </NavDropdown.Item>

              {/* <NavDropdown.Item href="#action/3.2">
                Chế độ tối
              </NavDropdown.Item> */}

              <NavDropdown.Divider />
              <NavDropdown.Item>Thông tin</NavDropdown.Item>
            </NavDropdown>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
