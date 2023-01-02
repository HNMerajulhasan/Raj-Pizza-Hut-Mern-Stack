import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// import { MdLocalOffer } from "react-icons/md";

const TopBar = () => {
  return (
    <>
      <Navbar className="p-3 opacity-80" expand="lg" style={{backgroundColor: "red",
  backgroundImage:"linear-gradient(to right, indigo, RebeccaPurple, MediumVioletRed, RebeccaPurple, indigo, violet" }}>
        <Container fluid>
          <h6 className="text-light fs-5 fw-bold">
          <Image
              src="https://cdn.dribbble.com/users/404971/screenshots/1241486/pizza-logo.png"
              alt="logo"
              style={{ height: "40px",width:'40px', borderRadius:'50px'}}
            />&nbsp;&nbsp; 
            <Image
              src="https://pizzaguardians.com.au/wp-content/uploads/2020/03/logo-borderless.png"
              alt="logo"
              style={{ height: "45px",width:'200px' }}
            />
           
          </h6>
          <Nav className="ms-auto">
            <LinkContainer to="/" activeClassName="" className="text-light fw-bold">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" activeClassName="" className="text-light fw-bold">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" activeClassName="" className="text-light fw-bold">
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/policy" activeClassName="" className="text-light fw-bold">
              <Nav.Link>Blog</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default TopBar;