import React, {Component} from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import AddUserForm from './AddUserForm';
import Users from './Users';

class Plan extends Component {
  constructor(props){
    super();
    this.state={
      users:[
        {name:"Rob Brown",
         details:"Trip to Kumasi",
         duration:"One Day",
         email:"Rbrown@yahoo.com",
         id:"dnjjd99ujd"
        },

        {name:"Kwasi Afram",
         details:"Trip to Sekondi",
         duration:"Three Day",
         email:"Kwafro@gmail.com",
         id:"hdd9dmdhhdu"
      },

      {name:"Mercy Sey",
      details:"Trip to Togo",
      duration:"Two Weeks",
      email:"Mersey@yahoo.com",
      id:"dnju8jendb"
   },
        
      
      ]
    }
  }

addNewUser=(user)=>{
  user.id=Math.random().toString()
  this.setState({
users:[...this.state.users, user]
  })
};

deleteUser=(id)=>{
let undeletedUsers=this.state.users.filter((user)=> user.id !==id)
this.setState({
 users:undeletedUsers  
})
};


editUser=(id,updatedUser)=>{
this.setState({
 users:this.state.users.map(user=>user.id===id ? updatedUser : user)
})
};

  render(){
  return (
    <div>
      <Container>
        <Row>
          <Col md='4'>
            <AddUserForm addUser={this.addNewUser}/>
          </Col>
          <Col>
          <Users UsersData={this.state.users} deleteUser={this.deleteUser} editUser={this.editUser}/>
          </Col>
        </Row>
      </Container>
    </div>
  );}
}

export default Plan;

