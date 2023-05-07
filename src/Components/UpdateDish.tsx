import { useState } from "react";
import { Dish } from "../api";
import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import NavBarComp from "./NavBarComp";

function UpdateCategory() {

    const[image, setImage] = useState('');
    const[description, setDescription] = useState('');
    const[dishId, setDishId] = useState(0);
    const[price, setPrice] = useState(0);
    const[nature, setNature] = useState('');

    const data = {
        dishImage: image,
        dishDescription: description,
        dishPrice: price,
        dishNature: nature
    }
    
    function handleSubmit(e:any) {
        e.preventDefault();
        Dish.update(data, dishId);
        console.log('dish updated');
    }

    return (
        <React.Fragment>
            <NavBarComp/>
            <div className="container">
                <h1>Update Category</h1>
                <Form style={containerStyles}>
                    <Form.Group className="mb-3">
                        <Form.Label>Select Dish</Form.Label>
                        <Form.Control type="text" id="dishId" value={dishId} onChange={(e) => setDishId(parseInt(e.target.value))} placeholder="Enter Dish Name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Dish Image</Form.Label>
                        <Form.Control type="text" id="dishImage" value={image} onChange={(e) => setImage(e.target.value)}  placeholder="Enter the URL of the Image" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Dish Description</Form.Label>
                        <Form.Control type="text" id="dishDescription" value={description} onChange={(e) => setDescription(e.target.value)}  placeholder="Enter the Description of the Dish" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Dish Price</Form.Label>
                        <Form.Control type="text" id="dishPrice" value={price} onChange={(e) => setPrice(parseInt(e.target.value))}  placeholder="Enter the Dish Price" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Dish Nature</Form.Label>
                        <Form.Control type="text" id="dishNature" value={nature} onChange={(e) => setNature(e.target.value)}  placeholder="Enter the Dish Nature" />
                    </Form.Group>
                    <Button onClick={handleSubmit} variant="outline-dark" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </React.Fragment>
    )
}

const containerStyles = {
    width: '30rem',
    marginTop: '3rem',
    backgroundColor: '#f5f5f5',
    border: '1px solid lightgray',
    borderRadius: '1rem',
    padding: '1rem',
}

export default UpdateCategory;