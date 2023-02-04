import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';


class AddUserForm extends Component {
    constructor(props){
        super(props);
        this.state={ name:"",
                     details:"",
                     duration:"",
                     email:"",
                     
    }
    }

handleChange= (e) =>{
    e.preventDefault()
    this.setState({
[e.target.name] : e.target.value
    });
    
};

handleSubmit = (e) =>{
    e.preventDefault();
    this.props.addUser(this.state);
    this.setState({
        name:"",
        details:"",
        duration:"",
        email:"",
    });
}

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" name="name" onChange={this.handleChange} value={this.state.name} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDetails">
              <Form.Label>Rental Details</Form.Label>
              <Form.Control type="text" placeholder="Enter details" name="details" onChange={this.handleChange} value={this.state.details} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDuration">
              <Form.Label>Rental Duration</Form.Label>
              <Form.Control type="text" placeholder="Enter duration" name="duration" onChange={this.handleChange} value={this.state.duration}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.handleChange} value={this.state.email} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        );
    }
}




export default AddUserForm;

