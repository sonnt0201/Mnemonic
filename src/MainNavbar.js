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
  Bin,
} from "./assets/icons";

import "./MainNavbar.css";


function MainNavbar() {
  const pages = ([
    {
      linkTo: "/mnemonic",
      pageName: "Trang Chủ",
      icon: Home
    },
    {
      linkTo: "/mnemonic/done-page",
      pageName: "Hoàn Thành",
      icon: Done
    },
    {
      linkTo: "/mnemonic/pending-page",
      pageName: "Chưa Xong",
      icon: Pending
    },
    {
      linkTo: "/mnemonic/overdue-page",
      pageName: "Quá Hạn",
      icon: Overdue
    },
    {
      linkTo: "/mnemonic/deleted-page",
      pageName: "Thùng Rác",
      icon: BinBlack
    },
    // {
    //   linkTo: "/mnemonic/chatgpt",
    //   pageName: "Chat",
    //   icon: ""
    // },
    // {
    //   linkTo: "/mnemonic/setting",
    //   pageName: "Cài Đặt",
    //   icon: ""
    // },
  ]);
  const location = useLocation();

  return (
    <>
      <Navbar expand="false" sticky="top" className="nav-bar">
        <Container>
          <Navbar.Brand className="app-name">
            <Link to="/mnemonic">MNEMONIC</Link>
          </Navbar.Brand>

          <Nav className="page-name">
            <h2>
              {pages.find((page) => page.linkTo === location.pathname).pageName}
            </h2>
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
                {
                  pages.map( page => 
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
                  </Link>)
                }
                {/* <Link
                  className={
                    "mb-4 my-auto " +
                    (location.pathname === PageEnum.HOME ? "is-active" : "")
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
                    "mb-4 my-auto " +
                    (location.pathname === PageEnum.DONE ? "is-active" : "")
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
                    "mb-4 my-auto " +
                    (location.pathname === PageEnum.PENDING ? "is-active" : "")
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
                    "mb-4 my-auto " +
                    (location.pathname === PageEnum.OVERDUE ? "is-active" : "")
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
                    "mb-4 my-auto " +
                    (location.pathname === PageEnum.DELETED ? "is-active" : "")
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
                    "mb-4 my-auto " +
                    (location.pathname === PageEnum.SETTING ? "is-active" : "")
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
                </Link> */}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNavbar;
