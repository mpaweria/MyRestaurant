import { useEffect, useState } from "react";
import { Dish } from "../api";
import React from "react";
import NavBarComp from "./NavBarComp";
import { Col, Container, Row } from "react-bootstrap";
import { DishType } from "../type";
import DishCard from "./DishCard";

function ViewDish() {

    const [dishes, setDishes] = useState([]);

    async function getData() {
        const data = await Dish.getByCategoryId(2);
        setDishes(data);
    }

    useEffect(() => {
        getData();
    }, []);
    return (
        <React.Fragment>
            <NavBarComp/>
            <h1>Enjoy our Dishes</h1>
            <br />
            <Container>
                <Row>
                    {dishes.length ? dishes.map((d:DishType) => {
                        return (
                            <Col sm>
                                <DishCard dishName={d.dishName} dishImage={d.dishImage} dishDescription={d.dishDescription} dishPrice={d.dishPrice} dishNature={d.dishNature} />
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