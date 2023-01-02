import React from "react";
import { Container, Row, Col, Table, Image, Button } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { ImAddressBook, ImInstagram, ImMobile, ImWhatsapp } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import FooterScreen from "../screens/FooterScreen";
const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>Raj Pizza Hut</h1>
            <p style={{textAlign:'justify'}}>
            Pizza Hut's first television commercial was produced in 1965 by Bob Walterscheidt for the Harry Crow agency in Wichita, and was entitled "Putt-Putt to the Pizza Hut". The ad looks just like an old movie and is set in fast motion. It features a man in a business suit and tie, played by Ron Williams, who was then a production manager for Wichita's ABC affiliate KAKE-TV, as he starts ordering take-out, leaves his house, and gets into his 1965 Mustang JR by driving to Pizza Hut, where he is chased by a variety of townspeople, portrayed by neighborhood kids, Walterscheidt and his daughter, and various employees for Harry Crow and KAKE-TV. He goes inside Pizza Hut by picking up his pizza and gets back in the 1965 Mustang Jr to return home. They went eating all the pizza except the man who ordered it, which makes the man very upset, as he calls Pizza Hut again. The ad first aired on November 19, 1966, during halftime of the Notre Dame vs. Michigan State "Game of the Century", and dramatically increased sales for the franchise. "Putt-Putt to the Pizza Hut" ran on TV for eight years and was nominated for a Clio Award.[49][50]

Until early 2007, Pizza Hut's main advertising slogan was "Gather 'round the good stuff".[51] From 2008 to 2009, the advertising slogan was "Now You're Eating!".[52] From 2009 to 2012, the advertising slogan was "Your Favorites. Your Pizza Hut"[51] From 2012 to 2016, the advertising slogan was "Make it great", a variation of the 1987–1995 slogan "Makin' it great!".
            
            </p>

            <h2 style={{marginTop:'80px',marginLeft:'80px'}}>Contact Us</h2> 
            <Table striped bordered hover className="text-center" style={{marginLeft:'80px',marginTop:'20px',width:'1000px'}}>
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>
                    --- Contact Details ---
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FiPhoneCall />
                  </td>
                  <td>Land Phone</td>
                  <td>1234857489</td>
                </tr>
                <tr>
                  <td>
                    <ImMobile />
                  </td>
                  <td>Call</td>
                  <td>+880 170-4357909</td>
                </tr>
                <tr>
                  <td>
                    <AiOutlineMail />
                  </td>
                  <td>Email</td>
                  <td>merajulhasan150@gmail.com</td>
                </tr>
                <tr>
                  <td>
                    <ImWhatsapp />
                  </td>
                  <td>WhatsApp</td>
                  <td>+88 01704357909</td>
                </tr>
                <tr>
                  <td>
                    <ImInstagram />
                  </td>
                  <td>Instagram</td>
                  <td>https://www.instagram.com/h_m_merajoule_hasasn/</td>
                </tr>
                <tr>
                  <td>
                    <ImAddressBook />
                  </td>
                  <td>Address</td>
                  <td>Mirpur-6,Dhaka,Bangladesh</td>
                </tr>
              </tbody>
            </Table>
           <div>
           <h4 style={{marginLeft:'80px',marginTop:'30px'}}>Please Deliver Your Message Here.</h4> 
             <form style={{marginBottom:'40px'}}>
             <textarea name="message" className="textarea textarea-bordered h-24 w-full mt-4" style={{height:'130px',width:'1000px',marginLeft:'80px'}}  placeholder="Write Your Message..." required></textarea>

             <input style={{marginLeft:'80px',width:'120px',backgroundColor:'violet'}} className='btn mb-3 mt-2' type="submit" value="Send Message"></input>
            
           </form>

           </div> 
          </Col>
          <Col md={6}>
            <Image
              src="images/farmhouse.jpg"
              style={{ width: "100%", height: "500px",borderRadius:'15px',marginTop:'20PX',marginLeft:'20px' }}
            />
          </Col>
        </Row>
      </Container>

     <FooterScreen></FooterScreen>

    </>
  );
};

export default Contact;