import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Row, Transition, Stack, Offcanvas, Image } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import {
  Home,
  Pending,
  Done,
  Infor,
  Overdue,
  Setting,
  BinBlack,
} from "./assets/icons";

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

            // backdrop = {false}
          >
            <Offcanvas.Header className="offcanvas-header" closeButton>
              <Offcanvas.Title>MNEMONIC</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body className="offcanvas-body">
              <Nav>
                {/* is-active là className được thêm vào khi 1 page active => hiện css cho page active */}
                <Link
                  className={
                    "mb-4 my-auto " + (location.pathname === PageEnum.HOME
                      ? "is-active"
                      : "")
                  }
                  to="/mnemonic"
                >
                  <img
                    src={Home.default}
                    alt="home"
                    className="offcanvas-icon me-3 ms-3 ms-2"
                  />
                  Trang chủ
                </Link>

                <Link
                  className={
                    "mb-4 my-auto " + (location.pathname === PageEnum.DONE
                      ? "is-active"
                      : "")
                  }
                  to="/mnemonic/done-page"
                >
                  <img
                    src={Done.default}
                    alt="done"
                    className="offcanvas-icon me-3 ms-3 ms-2"
                  />
                  Hoàn thành
                </Link>

                <Link
                  className={
                    "mb-4 my-auto " + (location.pathname ===
                    PageEnum.PENDING
                      ? "is-active"
                      : "")
                  }
                  to="/mnemonic/pending-page"
                >
                  <img
                    src={Pending.default}
                    alt="pending"
                    className="offcanvas-icon me-3 ms-3 ms-2"
                  />
                  Còn hạn
                </Link>

                <Link
                  className={
                    "mb-4 my-auto " + (location.pathname ===
                    PageEnum.OVERDUE
                      ? "is-active"
                      : "")
                  }
                  to="/mnemonic/overdue-page"
                >
                  <img
                    src={Overdue.default}
                    alt="overdue"
                    className="offcanvas-icon me-3 ms-3 ms-2"
                  />
                  Quá hạn
                </Link>
                <Link
                  className={
                    "mb-4 my-auto " + (location.pathname === PageEnum.DELETED
                      ? "is-active"
                      : "")
                  }
                  to={"/mnemonic/deleted-page"}
                >
                  <img
                    src={BinBlack.default}
                    alt="home"
                    className="offcanvas-icon me-3 ms-3 ms-2"
                  />
                  Thùng rác
                </Link>
                <Link
                  className={
                    "mb-4 my-auto " + (location.pathname ===
                    PageEnum.SETTING
                      ? "is-active"
                      : "")
                  }
                >
                  <img
                    src={Setting.default}
                    alt="home"
                    className="offcanvas-icon me-3 ms-3 ms-2"
                  />
                  Cài đặt
                </Link>
                <Link className="mb-4 my-auto">
                  <img
                    src={Infor.default}
                    alt="home"
                    className="offcanvas-icon me-3 ms-3 ms-2"
                  />
                  Thông tin
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
