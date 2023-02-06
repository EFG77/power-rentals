import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          <Link className='nlink' to={'/'}>Power</Link>
            </Navbar.Brand>
          <Nav className="me-auto head">
            <Nav.Link href="#home">
              <Link className='nlink' to={'/'}>Home</Link>
              </Nav.Link>
            <Nav.Link href="#rental">
              <Link className='nlink' to={'/Rental'}>Rental</Link>
              </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  )
}
export default Header;
