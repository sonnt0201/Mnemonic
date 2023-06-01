import { Col, Nav, Navbar, Row } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"
import { Done, Home, Overdue, PendingIcon } from "../assets/icons"
import "./Tabbar.css"

export const Tabbar = () => {

    const location = useLocation()

    return <Navbar  className="justify-content-center tabbar" fixed = "bottom" >
        
        <Nav.Item as={Col} xs = {3} >
            <Link to = "/mnemonic/"  className={location.pathname === "/mnemonic" ? "selected" : "link"}>
                <img src={Home.default} alt="pending" /><br/>
                Trang chủ
            </Link>
        </Nav.Item>
        <Nav.Item  as={Col} xs = {3} >
            <Link to = "/mnemonic/pending-page" className={location.pathname === "/mnemonic/pending-page" ? "selected" : "link"}>
            <img src={PendingIcon.default} alt="pending" /><br/>
                Chờ
            </Link>
        </Nav.Item>
        <Nav.Item as={Col} xs = {3}>
            <Link to = "/mnemonic/done-page" className={location.pathname === "/mnemonic/done-page" ? "selected" : "link"}>
            <img src={Done.default} alt="pending" /><br/>
                Xong
            </Link>
        </Nav.Item>
        <Nav.Item as={Col} xs = {3}>
            <Link to = "/mnemonic/overdue-page" className={location.pathname === "/mnemonic/overdue-page" ? "selected" : "link"}>
            <img src={Overdue.default} alt="pending" /><br/>
                Quá hạn
            </Link>
        </Nav.Item>

       
        
       
    </Navbar>
}