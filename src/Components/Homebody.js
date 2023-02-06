import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Homebody.css';



function Homebody() {
  return (
    <Container >
      <Row>
        <Col className='Happy'>
        <p>
          Power Rentals is your one-stop shop<br/> for Quality Reliable Rentals.
          We have a network of safe and reliable drivers nation-wide.
          Wether you need a 4x4 in Tamale, a saloon car in Kumasi or a mini-bus in Accra,
          we've got you covered for all your Ghana rental needs. Contact us for a smooth rental experience today!!!
        </p>
        </Col>
        <Col className='Happy'>
        <img src='./Images/Image 8.jpg' alt='Happy Pic'/>
        </Col>
      </Row>
      <Row>
        <Col className='customer'>
          <p>
          Choose us for the best  Customer Service<br/> and Rental Experience.
           Please note: WE DO NOT OFFER SELF-DRIVE CAR RENTALS FOR INSURANCE REASONS.
           ALL RENTALS OPTIONS COME WITH CAR AND DRIVER INCLUDED. Our services include:
           <ul>
            <li>4x4 and salon car rentals</li>
            <li>15 passanger and coaster bus rentals</li>
            <li>Airport Transfers in Accra and Tamale</li>
            <li>Tourism Sites Transportation and Safari Services</li>
            <li>Regional Transfers</li>
            <li>Transportation to and from events such as Funerals, Weddings and Parties</li>
            <li>Customized Car and Driver Optiions in Ghana</li>
           </ul>
          </p>
          </Col>
        <Col className='customer'><img src='./Images/Image 6.jpg' alt='Trust Pic'/></Col>
      </Row>
    </Container>
  );
}

export default Homebody;


