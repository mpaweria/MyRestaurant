import { Alert, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { DishType } from '../type';
import { useNavigate } from 'react-router-dom';
import { Dish } from '../api';
import { useState } from 'react';

function DishCard(props: DishType) {

  const [deleteText, setDeleteText] = useState('');
  const navigate = useNavigate();

  async function deleteDish() {
    try {
      await Dish.delete(props.dishId)
      setDeleteText('Dish Deleted');
    }catch(e){
      throw e;
    }
  }

  return (
    <>
      {deleteText ? <Alert variant='warning'>{deleteText}</Alert> : ''}
      <Card style={{ width: '18rem', alignItems: 'center', textAlign: 'center' }}>
        <Card.Img variant="top" src={props.dishImage} style={{width: '286.4px', height: '190.78px'}}/>
        <Card.Body>
          <Card.Title>{props.dishName}</Card.Title>
          <Card.Text style={{textAlign: 'justify'}}>{props.dishDescription}</Card.Text>
          <span style={{marginRight: '15px'}}>{props.dishNature}</span>
          <span>{props.dishPrice}</span>
          <br />
          <Button style={{margin: '5px'}} variant='outline-warning' onClick={() => navigate(`/UpdateDish/${props.dishId}`)}>Update</Button>
          <Button style={{margin: '5px'}} variant='outline-danger' onClick={deleteDish}>Delete</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default DishCard;