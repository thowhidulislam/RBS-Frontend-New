import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
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
            {/* <Link href='/'>Home</Link>
            <Link href='/aboutUs'>About us</Link> */}
            {/* <Link href="/aboutUs" passHref>
              <Nav.Link className="text-dark">About us</Nav.Link>
            </Link> */}
            <Link href="/products" passHref>
              <Nav.Link className="text-dark">Products</Nav.Link>
            </Link>
            <Link href="/pricing" passHref>
              <Nav.Link className="text-dark">Pricing</Nav.Link>
            </Link>
            {/* <NavDropdown  className={`${NavStyles.navLink}`}  title={
        <span className="text-dark my-auto">Products</span>
    } id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
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
