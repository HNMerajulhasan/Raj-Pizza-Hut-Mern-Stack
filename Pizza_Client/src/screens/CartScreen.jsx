import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa";
import { addToCart, deleteFromCart } from "../actions/cartAction";
import Checkout from '../components/Checkout';
import FooterScreen from './FooterScreen';

const CartScreen = () => {
    const cartState = useSelector((state) => state.cartReducer);
    const cartItems = cartState.cartItems; 
    const dispatch=useDispatch();
    const subTotal = cartItems.reduce((x, item) => x + item.price, 0);
  return (
    <>
      <Container className='mt-4 mb-4'>
        <Row>
           <Col md={6} className="bg-white shadow mb-3">
             <Row>
             <h1 className='mb-4 p-2 rounded fw-bold fs-1' style={{color:"MistyRose",backgroundColor:"SlateGray",textAlign:'center'}}>Cart Items</h1>
                {cartItems.map((item)=>(
                   <>
                     <Col md={7}>
                       <h5 style={{color:"Purple",fontWeight:'bold'}}>
                       {item.name} : <span style={{color:'DarkOrange'}}>[{item.varient}]</span>
                       </h5> 
                       <h6 style={{fontWeight:'bold'}}>
                      {" "}
                      Price : {item.quantity} X {item.prices[0][item.varient]} ={" "}
                      {item.price}
                    </h6>
                    <h6 style={{fontWeight:'bold'}}>Quantity : &nbsp;
                        <FaMinusCircle 
                         className="text-danger" 
                         style={{ cursor: "pointer" }}
                         onClick={() => {
                           dispatch(
                             addToCart(item, item.quantity - 1, item.varient)
                           );
                         }}
                         />{" "} 
                         &nbsp;
                        {item.quantity} &nbsp;
                        <FaPlusCircle
                         className="text-success"
                         style={{ cursor: "pointer" }}
                         onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity + 1, item.varient)
                          );
                        }}
                         />
                        </h6>
                     </Col>
                     <Col md={5}>
                     <img className='rounded'
                      alt={item.name}
                      src={item.image}
                      style={{ width: "90px", height: "80px"}}
                    />
                    <FaTrash
                      className="text-danger"
                      style={{ cursor: "pointer", marginLeft: "60px" }}
                      onClick={() => {
                        dispatch(deleteFromCart(item));
                      }}
                    />
                     </Col>
                     <hr/>
                   </> 
                ))}
             </Row>
           </Col> 
           <Col md={4} style={{marginLeft:'150px'}}>
             <h1 style={{color:'MediumSlateBlue',fontWeight:'bold'}}>Payment Info</h1>
             <hr/>
             <h4 style={{color:'DarkOrange' ,fontWeight:'bold',fontSize:'1.5rem'}}>Sub Total </h4>
            <h4 style={{fontWeight:'bold',marginBottom:"12px"}}>$ : {subTotal} </h4>
            <Checkout subTotal={subTotal}/>
           </Col>
        </Row>
      </Container>
      <FooterScreen></FooterScreen>
    </>
  )
}

export default CartScreen
