import { Alert, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { CategoryType } from '../type';
import { useNavigate } from 'react-router-dom';
import { Category } from '../api';
import { useState } from 'react';

function CategoryCard(props: CategoryType) {

    const [deleteText, setDeleteText] = useState('');
    const navigate = useNavigate();

    async function deleteCategory() {
        try{
            await Category.delete(props.categoryId)
            setDeleteText('Category Deleted');
          }catch(e){
            throw e;
          }
    }

    return (
        <>
            {deleteText ? <Alert variant='warning'>{deleteText}</Alert> : ''}
            <Card style={{ width: '18rem', alignItems: 'center', textAlign: 'center' }}>
            <Card.Img variant="top" src={props.categoryImage} style={{width: '286.4px', height: '190.78px'}} />
            <Card.Body>
                <Card.Title>{props.categroyName}</Card.Title>
                <Card.Text style={{textAlign: 'justify'}}>{props.categoryDescription}</Card.Text>
                <Button style={{margin: '5px'}} variant='outline-warning' onClick={() => navigate(`/UpdateCategory/${props.categoryId}`)}>Update</Button>
                <Button style={{margin: '5px'}} variant='outline-primary' onClick={() => navigate(`/ViewDish/${props.categoryId}`)}>View</Button>
                <Button style={{margin: '5px'}} variant='outline-danger' onClick={deleteCategory}>Delete</Button>
            </Card.Body>
            </Card>
        </>
    );
}

export default CategoryCard;