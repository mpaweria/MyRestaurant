import { useEffect, useState } from "react";
import { Dish } from "../api";
import React from "react";
import NavBarComp from "./NavBarComp";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { DishType } from "../type";
import DishCard from "./DishCard";
import { useParams } from "react-router-dom";

function ViewDish() {

    const [dishId, setDishId] = useState(0);
    const [dishes, setDishes] = useState([]);
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
        const dish = await Dish.getById(dishId);
        setDishId(0);
        console.log(dish);
    }

    return (
        <React.Fragment>
            <NavBarComp/>
            <h1>Enjoy our Dishes</h1>
            <Form>
                <Form.Group controlId="searchById">
                    <Form.Control type="number" placeholder="Search Dishes By Id" value={dishId} onChange={(e) => setDishId(parseInt(e.target.value))} />
                </Form.Group> 
                <Button onClick={getDishById}>Search</Button>
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
                        }) : ''
                    }
                </Row>
            </Container>

        </React.Fragment>

    )
}

export default ViewDish;