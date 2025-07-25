import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

const NavBar: React.FC = () => {
  return (
    <Navbar expand="md" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <strong></strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" style={{ color: "var(--success)" }}>
              <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ color: "var(--accent)" }}>
              <AiOutlineUser style={{ marginBottom: "2px" }} /> About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/projects"
              style={{ color: "var(--warning)" }}
            >
              <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />{" "}
              Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/resume"
              style={{ color: "var(--warning)" }}
            >
              <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
