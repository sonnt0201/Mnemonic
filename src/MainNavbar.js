import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Row, Transition, Stack, Offcanvas, Image } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import {
  Home,
  Overall,
  Done,
  Infor,
  Overdue,
  Setting,
  BinBlack,
  Chat
 
} from "./assets/icons";

import "./MainNavbar.css";


function MainNavbar() {
  const pages = ([
    {
      linkTo: "/mnemonic/",
      pageName: "Trang Chủ",
      icon: Home
    },
    {
      linkTo: "/mnemonic/done-page",
      pageName: "Hoàn Thành",
      icon: Done
    },
    {
      linkTo: "/mnemonic/overall-page",
      pageName: "Tất Cả",
      icon: Overall
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
    {
      linkTo: "/mnemonic/chatgpt",
      pageName: "Chat",
      icon: Chat
    },
    // {
    //   linkTo: "/mnemonic/setting",
    //   pageName: "Cài Đặt",
    //   icon: ""
    // },
  ]);
  const location = useLocation();
  const getPageName = () => {
    const currentPage = pages.find((page) => page.linkTo === location.pathname);
    if (currentPage) return currentPage.pageName;
    // console.log("currentPage error !!!")
    return ""
  }
  return (
    <>
      <Navbar expand="false" sticky="top" className="nav-bar">
        <Container>
          <Navbar.Brand className="app-name">
            <Link to="/mnemonic/">MNEMONIC</Link>
          </Navbar.Brand>

          <Nav className="page-name">
            <h2>
              {getPageName()}
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
                {/* map các pages */}
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
             
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNavbar;
