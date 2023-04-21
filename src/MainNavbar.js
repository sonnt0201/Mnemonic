import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useLocation } from "react-router-dom";

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
        return "Trang Chủ"
      case PageEnum.DONE:
        return "Hoàn Thành"
      case PageEnum.OVERDUE:
        return "Quá Hạn"
      case PageEnum.DELETED:
        return "Thùng Rác"
      case PageEnum.PENDING:
        return "Chưa Xong"
      case PageEnum.CHATGPT:
        return "Chat"
      default:
        return ""
    }
  }
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container >

        
        <Navbar.Brand className="app-name" style={{
          padding: "0",
          width: "10%",
          
        }}>
          <Link to="/mnemonic">MNEMONIC</Link>
        </Navbar.Brand>
        
        
       
        <Nav className="page-name mx-auto" style={{
          padding: "0",
          width: "60%",
          
        }}>
          <h2 className="page-name mx-auto">
            {
              pageName(location.pathname)
            }
          </h2>
        </Nav>
       

        <Navbar.Toggle className="justify-content-end" aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >


          <Nav className="justify-content-end" >
         
            <Nav.Link>
              <Link to="/mnemonic">Trang chủ</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/mnemonic/done-page">Hoàn thành</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/mnemonic/chatgpt"> Chat </Link>
            </Nav.Link>

            <NavDropdown title="Khác" id="basic-nav-dropdown">
              <Nav.Link>
                <Link to="/mnemonic/pending-page">Còn hạn</Link>
              </Nav.Link>

              <NavDropdown.Item>
                <Link to="/mnemonic/overdue-page">Quá hạn</Link>
              </NavDropdown.Item>

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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
