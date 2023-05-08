import { useEffect, useState } from "react";
import { Category } from "../api";
import React from "react";
import NavBarComp from "./NavBarComp";
import { Alert, Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import { CategoryType } from "../type";
import { useParams } from "react-router-dom";

function ViewCategory() {

    const [categoryId, setCategoryId] = useState<number | null>(null);
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [error, setError] = useState('');

    const params = useParams();

    async function getData() {
        const data = await Category.getByMenuId(parseInt(params.id || ''));
        setCategories(data);
    }

    useEffect(() => {
        getData();
    }, []);

    async function getCategoryById(e:any) {
        e.preventDefault()
        if(categoryId){
            const category = await Category.getById(categoryId);
            if(category.status === 404){
                setError(`No Category Found of Id = ${categoryId}`);
                const categories:CategoryType[] = [];
                setCategories(categories);
                
            }else{
                setCategoryId(null);
                const categories:CategoryType[] = [];
                categories.push(category);
                setCategories(categories);
            }
        }
    }

    return (
        <React.Fragment>
            <NavBarComp/>
            <h1>Enjoy our Categories</h1><Form onSubmit={getCategoryById}>
                <InputGroup className="mb-3">
                    <Form.Control placeholder="Enter Category Id" value={categoryId || undefined} onChange={(e) => setCategoryId(parseInt(e.target.value))} />
                    <Button variant="outline-dark">Search</Button>
                </InputGroup>
            </Form>
            <br />
            <Container>
                <Row>
                    {categories.length ? categories.map((c:CategoryType) => {
                        return (
                            <Col sm>
                                <CategoryCard categroyName={c.categroyName} categoryImage={c.categoryImage} categoryDescription={c.categoryDescription} categoryId={c.categoryId}/>
                            </Col>
                        )
                        }) : error ? <Alert variant="danger">{error}</Alert> : null
                    }
                </Row>
            </Container>

        </React.Fragment>

    )
}

export default ViewCategory;