import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { DishType } from '../type';
import { useNavigate } from 'react-router-dom';
import { Dish } from '../api';

function DishCard(props: DishType) {

  const navigate = useNavigate();

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.dishImage} />
      <Card.Body>
        <Card.Title>{props.dishName}</Card.Title>
        <Card.Text>{props.dishDescription}</Card.Text>
        <footer>{props.dishNature}</footer>
        <footer>{props.dishPrice}</footer>
        <Button  onClick={() => navigate(`/UpdateDish/${props.dishId}`)}>Update</Button>
        <Button onClick={() => Dish.delete(props.dishId)}>Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default DishCard;