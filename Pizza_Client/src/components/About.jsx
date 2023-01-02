import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import FooterScreen from "../screens/FooterScreen";

const About = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h2>Who we are ?</h2>
        <p style={{textAlign:"justify"}}>
        There’s nothing cookie-cutter about Pizza Hut. Not our pizzas. Not our people. And definitely not the way we live life. Around here, we don’t settle for anything less than food we’re proud to serve. And we don’t just clock in. Not when we can also become our best, make friends, and have fun while we’re at it. We’re the pizza company that lives life unboxed.
        We’re not for people who want to blend in: pushing boundaries is part of our heritage. We have more than 16,000 restaurants and 350,000 team members in more than 100 countries. Whether it’s the original Stuffed Crust or putting a pizza in outer space, we never stop driving ourselves to deliver hot pizzas, fast every time – anywhere you want to enjoy it.From day one, the Carney brothers could look their customers in the eye and promise them the finest pizza in town — because they knew the farmers who grew the ingredients, and they knew those farmers cared about quality.
        </p>
        <Row>
          <h2 style={{marginTop:'10px'}}>Our Cheif</h2>
          {/* https://st2.depositphotos.com/1518767/10480/i/950/depositphotos_104807364-stock-photo-pizza-chef-making-pizza.jpg
          https://img.freepik.com/premium-photo/happy-chef-showing-traditional-italian-pizza-cafe_7502-3928.jpg?w=2000
          https://st.depositphotos.com/1518767/2310/i/600/depositphotos_23105184-stock-photo-woman-preparing-pizza.jpg */}

     <Card className="bg-transparent border shadow-lg" data-tor="hover:shadow-color(transparent)" style={{ width: "20rem", marginTop: "20px",marginBottom:"30px",marginLeft:'40px', color:'indigo'}}>
      <Card.Img variant="top" 
      src="https://st2.depositphotos.com/1518767/10480/i/950/depositphotos_104807364-stock-photo-pizza-chef-making-pizza.jpg"  
      style={{ height: "250px",cursor: "pointer",marginTop:'10px' }}
      />
      <Card.Body>
        <Card.Title>Mr.John</Card.Title>
        <hr/>
        <Card.Text>
        <Row>
              <Col md={12}>
               <h5>About Him</h5>
                <p style={{textAlign:'justify'}}>He is a good Cheif.Pizza makers are kitchen employees who, of course, specialize in pizza. They typically work in restaurants but may also work for bars and catering companies.</p>
              </Col>
             
            </Row>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className="bg-transparent border shadow-lg" data-tor="hover:shadow-color(transparent)" style={{ width: "20rem", marginTop: "20px",marginBottom:"30px",marginLeft:'35px',color:'indigo' }}>
      <Card.Img variant="top" 
      src=" https://img.freepik.com/premium-photo/happy-chef-showing-traditional-italian-pizza-cafe_7502-3928.jpg?w=2000"  
      style={{ height: "250px",cursor: "pointer",marginTop:'10px' }}
      />
      <Card.Body>
        <Card.Title>Mr.Alex</Card.Title>
        <hr/>
        <Card.Text>
        <Row>
              <Col md={12}>
               <h5>About Him</h5>
                <p style={{textAlign:'justify'}}>He is a good Cheif.Pizza makers are kitchen employees who, of course, specialize in pizza. They typically work in restaurants but may also work for bars and catering companies.</p>
              </Col>
             
            </Row>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className="bg-transparent border shadow-lg" data-tor="hover:shadow-color(transparent)" style={{ width: "20rem", marginTop: "20px",marginBottom:"30px",marginLeft:'35px',color:'indigo' }}>
      <Card.Img variant="top" 
      src="https://st.depositphotos.com/1518767/2310/i/600/depositphotos_23105184-stock-photo-woman-preparing-pizza.jpg"  
      style={{ height: "250px",cursor: "pointer",marginTop:'10px' }}
      />
      <Card.Body>
        <Card.Title>Mr.Alisha</Card.Title>
        <hr/>
        <Card.Text>
        <Row>
              <Col md={12}>
               <h5>About Him</h5>
                <p style={{textAlign:'justify'}}>He is a good Cheif.Pizza makers are kitchen employees who, of course, specialize in pizza. They typically work in restaurants but may also work for bars and catering companies.</p>
              </Col>
             
            </Row>
        </Card.Text>
      </Card.Body>
    </Card>


        </Row>
        <h2 style={{marginTop:'15px'}}>Our Speciality</h2>
        <Row style={{marginBottom:'10px'}}>
          <Col md={6}>
            <p style={{textAlign:"justify"}}>
            In restaurants, pizza can be baked in an oven with fire bricks above the heat source,
             an electric deck oven, a conveyor belt oven, or, in traditional style in a wood or
              coal-fired brick oven. The pizza is slid into the oven on a long paddle, called a
               peel, and baked directly on hot bricks, a screen (a round metal grate, typically 
               aluminum), or whatever the oven surface is. Before use, a peel is typically sprinkled
                with cornmeal to allow the pizza to easily slide on and off it.[37] When made at 
                home, a pizza can be baked on a pizza stone in a regular oven to reproduce some of 
                the heating effect of a brick oven. Cooking directly on a metal surface results in 
                too rapid heat transfer to the crust, burning it.[38] Some home chefs use a
                 wood-fired pizza oven, usually installed outdoors. As in restaurants, these are 
                 often dome-shaped, as pizza ovens have been for centuries,[39] in order to achieve 
                 even heat distribution. Another variation is grilled pizza, in which the pizza is 
                 baked directly on a barbecue grill. Greek pizza, like deep dish Chicago and S
                 icilian style pizza, is baked in a pan rather than directly on the bricks of the 
                 pizza oven.
            </p>
          </Col>
          <Col md={6}>
            <p style={{textAlign:"justify",marginBottom:'55px'}}>
            Most restaurants use standard and purpose-built pizza preparation tables to assemble 
            their pizzas. Mass production of pizza by chains can be completely automated. Most
             restaurants use standard and purpose-built pizza preparation tables to assemble their 
             pizzas. Mass production of pizza by chains can be completely automated.Mozzarella 
             cheese is commonly used on pizza, with the buffalo mozzarella produced in the 
             surroundings of Naples.[43] Other cheeses are also used, particularly Italian 
             cheeses including provolone, pecorino romano, ricotta, and scamorza. Less expensive 
             processed cheeses or cheese analogues have been developed for mass-market pizzas to 
             produce desirable qualities like browning, melting, stretchiness, consistent fat and 
             moisture content, and stable shelf life. This quest to create the ideal and economical 
             pizza cheese has involved many studies and experiments analyzing the impact of vegetable
              oil, manufacturing and culture processes, denatured whey proteins, and other changes
               in manufacture.
            </p>
          </Col>
        </Row>
       
      </Container>
      <FooterScreen></FooterScreen>
    </>
  );
};

export default About;
