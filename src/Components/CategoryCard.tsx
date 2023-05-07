import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { CategoryType } from '../type';
import { useNavigate } from 'react-router-dom';
import { Category } from '../api';

function CategoryCard(props: CategoryType) {

    const navigate = useNavigate();

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.categoryImage} />
        <Card.Body>
            <Card.Title>{props.categroyName}</Card.Title>
            <Card.Text>{props.categoryDescription}</Card.Text>
            <Button variant='warning' onClick={() => navigate('/UpdateCategory')}>Update</Button>
            <Button variant='success' onClick={() => navigate('/ViewDish')}>View</Button>
            <Button variant='danger' onClick={() => Category.delete(9)}>Delete</Button>
        </Card.Body>
        </Card>
    );
}

export default CategoryCard;