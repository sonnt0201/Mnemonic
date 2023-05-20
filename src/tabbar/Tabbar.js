import { Container, Row, Col } from "react-bootstrap";
import {
  Home,
  Pending,
  Done,
  Infor,
  Overdue,
  Setting,
  BinBlack,
  Chat,
} from "../assets/icons";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import './Tabbar.css'
export const Tabbar = () => {
    
  const pages = [
    {
      linkTo: "/mnemonic/",
    //   pageName: "Trang Chủ",
      icon: Home,
    },
    {
      linkTo: "/mnemonic/pending-page",
    //   pageName: "Chưa Xong",
      icon: Pending,
    },
    {
      linkTo: "/mnemonic/done-page",
    //   pageName: "Hoàn Thành",
      icon: Done,
    },

    {
      linkTo: "/mnemonic/overdue-page",
    //   pageName: "Quá Hạn",
      icon: Overdue,
    },
  ];

  const location = useLocation();
  const usePage = useState(pages.find(page => page.linkTo === location.pathname))

  return (
    <Container className="justify-content-center">
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
};
