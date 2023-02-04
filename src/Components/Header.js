import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';


function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Power</Navbar.Brand>
          <Nav className="me-auto head">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#rental">Rental</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  )
}
export default Header;
