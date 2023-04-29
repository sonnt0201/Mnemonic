import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Row, Transition, Stack, Offcanvas } from "react-bootstrap";
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
    <>
      <Navbar expand="false" sticky="top" className="nav-bar">
        <Container>
          <Navbar.Brand className="app-name">
            <Link to="/mnemonic">MNEMONIC</Link>
          </Navbar.Brand>

          <Nav className="page-name">
            <h2>{pageName(location.pathname)}</h2>
          </Nav>

          <Stack direction="horizontal" className="quick-options">
            <Link className="me-3" to="/mnemonic/done-page">
              Hoàn thành
            </Link>

            <Link className="me-3" to="/mnemonic/pending-page">
              Còn hạn
            </Link>

            <Link className="me-3" to="/mnemonic/overdue-page">
              Quá hạn
            </Link>
          </Stack>

          <Navbar.Toggle
            className="justify-content-start me-2"
            aria-controls="basic-navbar-nav"
          />

          <Navbar.Offcanvas
            id="basic-navbar-nav"
            className="offcanvas"
            // scroll = {false}
            // backdrop = {false}
          >
            <Offcanvas.Body>
              <Nav>
                <Link className="me-3" to="/mnemonic/done-page">
                  Hoàn thành
                </Link>

                <Link className="me-3" to="/mnemonic/pending-page">
                  Còn hạn
                </Link>

                <Link className="me-3" to="/mnemonic/overdue-page">
                  Quá hạn
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNavbar;
