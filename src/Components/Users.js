import React from 'react';
import { Container,Row } from 'react-bootstrap';
import User from './User';

function Users(props) {
  return (
    <div>
    <Container>
        <Row>
            {props.UsersData.map((user)=>{
                return(<User userInfo={user} key={user.id} deleteUser={props.deleteUser} editUser={props.editUser}/>)
            })}
        </Row>
    </Container>
    </div>
  )
}

export default Users;
