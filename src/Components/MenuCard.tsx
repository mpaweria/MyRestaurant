import { Button, Card } from "react-bootstrap";
import { MenuType } from "../type";
import { useNavigate } from "react-router-dom";

function MenuCard(props: MenuType) {

    const navigate = useNavigate();

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.menuImage} />
            <Card.Body>
                <Card.Title>{props.menuName}</Card.Title>
                <Card.Text>{props.menuDescription}</Card.Text>
                <Button variant="primary" onClick={() => navigate('/ViewCategory')}>View</Button>
            </Card.Body>
        </Card>
    )
}

export default MenuCard;