import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Image } from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../actions/userAction";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";
// import { useSelector } from "react-redux";

const Registe = () => {

    const registerState = useSelector((state) => state.registerUserReducer);
    const { error, success, loading } = registerState;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confrimPassword, setConfirmPassword] = useState("");

    const dispatch = useDispatch();

    const registerhandler = () => {
        if (password !== confrimPassword) {
          alert("Password do not match");
        } else {
          const user = { name, email, password, confrimPassword };
          dispatch(registerUser(user));
        }
        window.alert('Registration Succesfully');
      };

  return (
    <>
    <Container className="mb-3 w-75 bg-transparent border shadow-lg" data-tor="hover:shadow-color(danger)" style={{marginLeft:'150px',marginTop:'40px' ,borderRadius:'8px'}}>
     <Row className=""> 
      {loading && <Loader />}
      {success && <Success success="User Register Successfully" />}
      {error && <Error error="somthing went wrong" />}
      <Col  style={{height:'400px',width:'50px', display: 'flex'}}>
       <Image src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=170667a&w=0&k=20&c=lVOQkXlHIStiX1ecs1VsZBJfuPGbY7yzg7ZRyvjP7I0=" className="img-fluid" alt="Phone image" />
      </Col>
      <Col>
      <Form>
        <h1 className="fs-2" style={{marginTop:'10px', marginBottom:'13px',color:'DarkViolet',fontWeight:'bold'}}>Registration Please.</h1>
      
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="fw-bold">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label className="fw-bold">Confrim Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confrimPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <h1 className="fs-6">Already have an account ? Please <Link to='/login'> Login</Link></h1>
        </Form.Group>
        <Button variant="primary" onClick={registerhandler} className='mb-3'>
          Register
        </Button>
      </Form>
      </Col>
      </Row>
    </Container>
  </>
  )
}

export default Registe
