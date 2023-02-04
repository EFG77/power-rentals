import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';

function Footer() {
  return (
    <div className='Footer'>
     <Container>
      <Row>
        <Col>
        <h3 className='ftext'>VISIT US IN GHANA</h3>	
		<h2 className='ftext'>Accra,Ghana</h2>
		<p className='ftext'>One Airport Square, Airport City
			              8th Floor
		</p>	
        </Col>
        <Col>
        <h3 className='ftext'>Contact Us</h3>
        <p className='ftext'>Tel:0245765967</p>
        <p className='ftext'>E-Mail:PowerRentals@yahoo.com</p>
        </Col>
      </Row>
    </Container> 
    </div>
  )
}

export default Footer;
