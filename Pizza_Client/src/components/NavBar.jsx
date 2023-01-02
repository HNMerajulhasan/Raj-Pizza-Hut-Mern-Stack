import React from "react";
import { Navbar, Nav, Container, Image, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { logoutUser } from "../actions/userAction";
const NavBar = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="border shadow sticky-top" style={{backgroundColor:"Lavender"}} data-tor="hover:shadow-intensity(xl)" variant="light">
        <Container>
          <Navbar.Brand>
            <Image
              src="https://lh3.googleusercontent.com/p/AF1QipM6HnEcTq-qpUP9rbCDaq5Yhq3sz-5acUCBF7L7=w1080-h608-p-no-v0"
              alt="logo"
              style={{ height: "50px",width:'180px',borderRadius:'10px', marginLeft:'0px' }}
            />
             <span className="fw-bold fs-4" style={{color:"Brown",marginLeft:'8px'}}> Raj-Pizza Hut</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {currentUser ? (
                <LinkContainer to="/" style={{fontWeight:"bold" ,color:"Maroon"}}>
                  <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
                    <LinkContainer to="/orders">
                      <NavDropdown.Item href="">
                        orders
                      </NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    >
                      Logout
                    </NavDropdown.Item>
                    
                    <LinkContainer to="/admin">
                      <NavDropdown.Item href="">
                        Admin Dashboard
                      </NavDropdown.Item>
                    </LinkContainer>

                  </NavDropdown>
                </LinkContainer>
              ) : (
                <>
                  {" "}
                  <LinkContainer to="/login" style={{fontWeight:"bold",color:"Maroon"}}>
                    <Nav.Link >Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register" style={{fontWeight:"bold" ,color:"Maroon"}}>
                    <Nav.Link>Register</Nav.Link>
                  </LinkContainer>{" "}
                </>
              )}

              <LinkContainer to="/cart" style={{fontWeight:"bold" ,color:"OrangeRed"}}>
                <Nav.Link>Cart {cartState.cartItems.length}</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;