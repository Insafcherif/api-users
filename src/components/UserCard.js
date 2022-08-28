import React from 'react'; 
import ListGroup from 'react-bootstrap/ListGroup';

function UserCard({user}) {
  return (
    <ListGroup>
    <ListGroup.Item>{user.id}</ListGroup.Item>
    <ListGroup.Item>{user.name}</ListGroup.Item>
    <ListGroup.Item>{user.email}</ListGroup.Item>
  </ListGroup>
  )
}

export default UserCard