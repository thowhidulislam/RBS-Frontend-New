import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavStyles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className={`${NavStyles.navigation} `}>
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand className="text-dark fw-bold">RBS Tech</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <span>
            <FontAwesomeIcon icon={faBars} color="#FFF" size="2x" />
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link href="/" passHref>
              <Nav.Link className="text-dark">Home</Nav.Link>
            </Link>
            <Link href="/pricing" passHref>
              <Nav.Link className="text-dark">Pricing</Nav.Link>
            </Link>
          </Nav>
          <Nav>
            <Link href="/contactUs" passHref>
              <Nav.Link className="text-dark">Contact us</Nav.Link>
            </Link>
            <Link href="/adminPanel" passHref>
              <Nav.Link className="text-dark">Admin Panel</Nav.Link>
            </Link>
            <Link href="/signup" passHref>
              <Nav.Link className="text-dark">Sign up</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
