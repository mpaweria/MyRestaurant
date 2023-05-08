import { useEffect, useState } from "react";
import { Dish } from "../api";
import React from "react";
import NavBarComp from "./NavBarComp";
import { Alert, Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { DishType } from "../type";
import DishCard from "./DishCard";
import { useParams } from "react-router-dom";

function ViewDish() {

    const [dishId, setDishId] = useState<number | null>(null);
    const [dishes, setDishes] = useState<DishType[]>([]);
    const [error, setError] = useState('');

    const params = useParams();

    async function getData() {
        const data = await Dish.getByCategoryId(parseInt(params.id || ''));
        setDishes(data);
    }

    useEffect(() => {
        getData();
    }, []);

    async function getDishById(e:any) {
        e.preventDefault()
        if(dishId){
            const dish = await Dish.getById(dishId);
            if(dish.status === 404){
                setError(`No Dish Found of Id = ${dishId}`);
                const dishes:DishType[] = [];
                setDishes(dishes);
            }
            else{
                setDishId(null);
                const dishes:DishType[] = [];
                dishes.push(dish);
                setDishes(dishes);
            }
        }
    }

    return (
        <React.Fragment>
            <NavBarComp/>
            <h1>Enjoy our Dishes</h1>
            <Form onSubmit={getDishById}>
                <InputGroup className="mb-3">
                    <Form.Control placeholder="Enter Dish Id" value={dishId || undefined} onChange={(e) => setDishId(parseInt(e.target.value))} />
                    <Button variant="outline-dark">Search</Button>
                </InputGroup>
            </Form>
            <br />
            <Container>
                <Row>
                    {dishes.length ? dishes.map((d:DishType) => {
                        return (
                            <Col sm>
                                <DishCard dishName={d.dishName} dishImage={d.dishImage} dishDescription={d.dishDescription} dishPrice={d.dishPrice} dishNature={d.dishNature} dishId={d.dishId}/>
                            </Col>
                        )
                        }) : error ? <Alert variant="danger">{error}</Alert> : null
                        
                    }
                </Row>
            </Container>

        </React.Fragment>

    )
}

export default ViewDish;