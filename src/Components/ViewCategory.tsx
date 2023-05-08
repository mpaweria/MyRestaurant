import { useEffect, useState } from "react";
import { Category } from "../api";
import React from "react";
import NavBarComp from "./NavBarComp";
import { Col, Container, Row } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import { CategoryType } from "../type";
import { useParams } from "react-router-dom";

function ViewCategory() {

    const [categories, setCategories] = useState([]);
    const params = useParams();

    async function getData() {
        const data = await Category.getByMenuId(parseInt(params.id || ''));
        setCategories(data);
    }

    useEffect(() => {
        getData();
    }, []);
    return (
        <React.Fragment>
            <NavBarComp/>
            <h1>Enjoy our Categories</h1>
            <br />
            <Container>
                <Row>
                    {categories.length ? categories.map((c:CategoryType) => {
                        return (
                            <Col sm>
                                <CategoryCard categroyName={c.categroyName} categoryImage={c.categoryImage} categoryDescription={c.categoryDescription} categoryId={c.categoryId}/>
                            </Col>
                        )
                        }) : ''
                    }
                </Row>
            </Container>

        </React.Fragment>

    )
}

export default ViewCategory;