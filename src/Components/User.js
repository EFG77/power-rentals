import {React, useState} from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import EditUserForm from './EditUserForm';



function User(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const handleDelete=(e)=>{
e.preventDefault();
props.deleteUser(props.userInfo.id);
}

  return (
<div>

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>EditUserForm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm userInfo={props.userInfo} editUser={props.editUser} closeModal={handleClose}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
   <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Power Rentals</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Rental Request</Card.Subtitle>
        <Card.Text>
          <p>Name:{props.userInfo.name}</p>
          <p>Rental Details:{props.userInfo.details}</p>
          <p>Rental Duration: {props.userInfo.duration}</p>
          <p>Email: {props.userInfo.email}</p>
        </Card.Text>
        <Card.Link href="#"><Button variant="primary" onClick={handleShow}>Edit</Button></Card.Link>
        <Card.Link href="#"><Button variant="danger" onClick={handleDelete}>Delete</Button></Card.Link>
      </Card.Body>
    </Card>
    <br/>
</div>


  )
}

export default User;
