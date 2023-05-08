import { Button, Card } from "react-bootstrap";
import { MenuType } from "../type";
import { useNavigate } from "react-router-dom";

function MenuCard(props: MenuType) {

    const navigate = useNavigate();

    return (
        <Card style={{ width: '18rem', alignItems: 'center', textAlign: 'center' }}>
            <Card.Img style={{width: '286.4px', height: '190.78px'}} variant="top" src={props.menuImage} />
            <Card.Body>
                <Card.Title>{props.menuName}</Card.Title>
                <Card.Text>{props.menuDescription}</Card.Text>
                <Button variant="outline-primary" onClick={() => navigate(`/ViewCategory/${props.menuId}`)}>View</Button>
            </Card.Body>
        </Card>
    )
}

export default MenuCard;