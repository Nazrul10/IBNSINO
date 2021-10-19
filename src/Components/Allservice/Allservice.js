import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Allservice = (props) => {
    const {name, picture, icon, discriptiion} = props.allservice
    return (
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={picture} />
  <Card.Body>
    <Card.Title> <img width="20px" src={icon} alt="" /> {name}</Card.Title>
    <Card.Text>{discriptiion}</Card.Text>
  </Card.Body>
  <div className="p-3">
  <Button>BOOK A CONSULTATION</Button>
  </div>
</Card>
    );
};

export default Allservice;