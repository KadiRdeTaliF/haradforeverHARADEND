import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'C:/Users/Matfey/Desktop/FRONTEND2.0/haradforever/src/components/css/card.css'
import axios  from 'axios';

function MyCard(props) {
  const handleDelete = () => {
      axios.delete(`https://656b455adac3630cf727ee42.mockapi.io/haradforeverProducts/${props.id}`)}
  return (
    <Card style={{ width: '18rem' }} className="card">
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.price}
        </Card.Text>
        <Button style={{ width: '11rem' }} onClick= {() => handleDelete(props.id)}>Удалить</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard