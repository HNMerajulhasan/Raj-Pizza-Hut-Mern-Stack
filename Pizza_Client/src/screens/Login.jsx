import React, { useState, useEffect } from "react";
import { Container, Form, Button, Image, Row, Col } from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { loginUser } from "../actions/userAction";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);
  const loginHandler = () => {
    const user = { email, password };
    dispatch(loginUser(user));
  };
  return (
    <>
      <Container className="position-absolute  w-75 bg-transparent border shadow-lg" data-tor="hover:shadow-color(danger)" style={{marginLeft:'150px',marginTop:'50px',borderRadius:'8px'}}>
       <Row>
       <Col  style={{height:'400px',width:'50px', display: 'flex'}}>
       <Image src="https://static.vecteezy.com/system/resources/thumbnails/002/737/799/small_2x/online-registration-illustration-concept-free-vector.jpg" className="img-fluid" alt="Phone image" />
      </Col>
        <Col>
        <Form className="m-4">
        <h1 className="fs-2" style={{marginTop:'10px', marginBottom:'13px',color:'DarkViolet',fontWeight:'bold'}}>Login Here.</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fw-bold">Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="fw-bold">Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <h1 className="fs-6">Are you new here ? Please <Link to='/register'> Register</Link></h1>
          </Form.Group>
          <Button variant="primary" onClick={loginHandler}>
            Login
          </Button>
         </Form>
        </Col> 
           
        </Row>
       
      </Container>
      
    </>
  );
};

export default Login;