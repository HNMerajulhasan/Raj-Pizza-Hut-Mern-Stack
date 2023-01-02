import React, { useEffect } from "react";
import { Row, Col, Container, Button, ButtonGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import AddNewPizza from "../components/Admin/AddNewPizza";
import EditPizza from "../components/Admin/EditPizza";
import OrderList from "../components/Admin/OrderList";
import Pizzaslist from "../components/Admin/Pizzaslist";
import Userlist from "../components/Admin/Userlist";
import FooterScreen from "./FooterScreen";
//import EditPizza from "./../components/Admin/EditPizza";
const AdminScreen = ({history}) => {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  useEffect(() => {
    if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, [currentUser]);
  return (
    <>
      <Container className="mt-4 mb-3">
        <Row>
          <h1 className="text-center bg-dark text-light p-2">Admin Panel</h1>
          <Col md={2}>
            <ButtonGroup vertical style={{ minHeight: "400px"}}>
              <Button style={{backgroundColor:'deeppink',color:'navajowhite',fontWeight:'bold' }} onClick={() => history.push("/admin/userlist")}>
                All Users
              </Button>
              <Button  style={{backgroundColor:'mediumturquoise',color:'maroon',fontWeight:'bold' }} onClick={() => history.push("/admin/pizzalist")}>
                All Pizzas
              </Button>
              <Button style={{backgroundColor:' purple',color:'gainsboro',fontWeight:'bold' }} onClick={() => history.push("/admin/addnewpizza")}>
                Add New Pizza
              </Button>
              <Button style={{backgroundColor:'lawngreen',color:'deeppink',fontWeight:'bold' }} onClick={() => history.push("/admin/orderlist")}>
                All Orders
              </Button>
            </ButtonGroup>
          </Col>
          <Col md={10}>
            <Switch>
              <Route path="/admin" component={Userlist} exact />
              <Route path="/admin/userlist" component={Userlist} exact />
              <Route
                path="/admin/editpizza/:pizzaId"
                component={EditPizza}
                exact
              />
              <Route path="/admin/pizzalist" component={Pizzaslist} exact />
              <Route path="/admin/addnewpizza" component={AddNewPizza} exact />
              <Route path="/admin/orderlist" component={OrderList} exact />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminScreen;