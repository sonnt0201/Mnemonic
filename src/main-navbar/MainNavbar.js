import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Row, Transition, Stack, Offcanvas, Image } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import {
  Home,
  Overall,
  Done,
  Overdue,
  BinBlack,
  Chat,
  AccountSwitch,
} from "../assets/icons";

import "./MainNavbar.css";

function MainNavbar() {
  const pages = [
    {
      linkTo: "/mnemonic/",
      pageName: "Trang Chủ",
      icon: Home,
      offcanvas: true,
    },
    {
      linkTo: "/mnemonic/done-page",
      pageName: "Hoàn Thành",
      icon: Done,
      offcanvas: true,
    },
    {
      linkTo: "/mnemonic/overall-page",
      pageName: "Tất Cả",
      icon: Overall,
      offcanvas: true,
    },
    {
      linkTo: "/mnemonic/overdue-page",
      pageName: "Quá Hạn",
      icon: Overdue,
      offcanvas: true,
    },
    {
      linkTo: "/mnemonic/deleted-page",
      pageName: "Thùng Rác",
      icon: BinBlack,
      offcanvas: true,
    },
    {
      linkTo: "/mnemonic/chatgpt",
      pageName: "Chat",
      icon: Chat,
      offcanvas: true,
    },
    {
      linkTo: "/mnemonic/account",
      pageName: "Tài khoản",
      icon: AccountSwitch,
      // offcanvas: true
    },
    {
      linkTo: "/mnemonic/signin",
      pageName: "Đăng nhập",
      icon: AccountSwitch,
    },
    {
      linkTo: "/mnemonic/signup",
      pageName: "Đăng kí",
      icon: AccountSwitch,
    },
    // {
    //   linkTo: "/mnemonic/setting",
    //   pageName: "Cài Đặt",
    //   icon: ""
    // },
  ];
  const location = useLocation();
  const getPageName = () => {
    const currentPage = pages.find((page) => page.linkTo === location.pathname);
    if (currentPage) return currentPage.pageName;
    return "Trang Chủ";
  };
  return (
    <>
      <Navbar expand="false" sticky="top" className="nav-bar">
        <Container className="justify-content-center">
          <Navbar.Toggle
            className="offcanvas-toggle me-2"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Brand className="app-name">
            <Link to="/mnemonic/">MNEMONIC</Link>
          </Navbar.Brand>

          <Navbar.Brand className="page-name">
            <h2>{getPageName()}</h2>
          </Navbar.Brand>

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

          <Link
            className="me-1 account-switch-container"
            to="/mnemonic/account"
          >
            <img
              src={AccountSwitch.default}
              className="account-switch"
              alt="account-switch"
            />
          </Link>

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
                {pages.map(
                  (page) =>
                    page.offcanvas && (
                      <Link
                        className={
                          " my-auto offcanvas-link " +
                          (location.pathname === page.linkTo ? "is-active" : "")
                        }
                        to={page.linkTo}
                      >
                        <img
                          src={page.icon.default}
                          alt="home"
                          className="offcanvas-icon me-3 ms-3"
                        />
                        {page.pageName}
                      </Link>
                    )
                )}

                {/* set  cho tài khoản */}
                <Link
                  className={
                    " my-auto offcanvas-link " +
                    (location.pathname === "/mnemonic/account" ||
                    location.pathname === "/mnemonic/signin" ||
                    location.pathname === "/mnemonic/signup"
                      ? "is-active"
                      : "")
                  }
                  to={"/mnemonic/account"}
                >
                  <img
                    src={AccountSwitch.default}
                    alt="home"
                    className="offcanvas-icon me-3 ms-3"
                  />
                  Tài khoản
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
