import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    const {name, picture, icon, discriptiion, _id}= props.service
    return (
        <Card className="card-container" style={{ width: '18rem' }}>
        <Card.Img width="100%" height="100%" src={picture} />
        <Card.Body>
          <Card.Title><img width="20px" src={icon} alt="" /> {name}</Card.Title>
          <Card.Text>{discriptiion.slice(0, 140)}</Card.Text>
          <div className="d-flex justify-content-between">
          <Link to={`/Details/${_id}`}>
          <Button>Details</Button>
          </Link>
          <Link to="/service">
          <Button>See more</Button>
          </Link>
          </div>
        </Card.Body>
      </Card>
    );
};

export default Service;