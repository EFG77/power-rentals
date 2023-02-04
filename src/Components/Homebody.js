import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Homebody.css';



function Homebody() {
  return (
    <Container >
      <Row>
        <Col className='Happy'>
        <p>Power Rentals is your one-stop shop<br/> for Quality Reliable Rentals</p>
        </Col>
        <Col className='Happy'>
        <img src='./Images/Image 4.jpg' alt='Happy Pic'/>
        </Col>
      </Row>
      <Row>
        <Col className='customer'><p>Choose us for the best  Customer Service<br/> and Rental Experience</p></Col>
        <Col className='customer'><img src='./Images/Image 6.jpg' alt='Trust Pic'/></Col>
      </Row>
    </Container>
  );
}

export default Homebody;


