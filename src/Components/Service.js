import React from 'react'
import  Container from 'react-bootstrap/Container';
import  Row from 'react-bootstrap/Row'; 
import  Col from 'react-bootstrap/Col'; 
import  Card from 'react-bootstrap/Card';
function Service() {
  return (
    <Container>
      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Images/Sedan-Vs-SUV.jpg"/>
      <Card.Body>
        <Card.Title>SUV and Saloon Car Rentals</Card.Title>
        <Card.Text>
          We offer rentals of SUV and Saloon Cars
        </Card.Text>
      </Card.Body>
    </Card>

        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Images/Passanger Bus.jpeg"/>
      <Card.Body>
        <Card.Title>Passanger and Coastal Bus Rentals</Card.Title>
        <Card.Text>
          You can also rent Busses for any ocassion and journey
        </Card.Text>
      </Card.Body>
    </Card>
        
        </Col>


        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Images/Airport Transfer2.jpeg" />
      <Card.Body>
        <Card.Title>  Airport Transfers</Card.Title>
        <Card.Text>
          We offer Airport Transfers in Accra and Tamale
        </Card.Text>
      </Card.Body>
    </Card>

        </Col>
      </Row>

      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Images/Regional Transfer.jpeg" />
      <Card.Body>
        <Card.Title>Regional Transfers</Card.Title>
        <Card.Text>
          We offer inter-regional round-trip Transfers.
        </Card.Text>
      </Card.Body>
    </Card>
    
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Images/Tourism Services.jpeg" />
      <Card.Body>
        <Card.Title>Tourism and Safari Services</Card.Title>
        <Card.Text>
          We transport Clients on various Tours and Excursions.
        </Card.Text>
      </Card.Body>
    </Card>

        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Images/Event Transport.jpeg" />
      <Card.Body>
        <Card.Title>Event Transport</Card.Title>
        <Card.Text>
          We offer transfers to and from events like Weddings, Funerals and Parties
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
      </Row>

      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Images/Custom Transport.jpeg" />
      <Card.Body>
        <Card.Title>Custom Options</Card.Title>
        <Card.Text>
          We offer custom options based on clients unique requirments.
        </Card.Text>
      </Card.Body>
    </Card>

        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Images/Long Term Rental.jpeg" />
      <Card.Body>
        <Card.Title>Long-Term Rentals</Card.Title>
        <Card.Text>
          We also provide long-term rentals up to a period of two months. This service<br/>
          is subject to availability of vehicles.
        </Card.Text>
      </Card.Body>
    </Card>

        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Images/Loyalty Program.jpeg" />
      <Card.Body>
        <Card.Title>Loyalty Program</Card.Title>
        <Card.Text>
          Frequent Clients are signed on to our Loyalty Program and enjoy<br/>
          special benefits such as discounts and special gifts.
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
      </Row>

    </Container>
  )
}

export default Service
