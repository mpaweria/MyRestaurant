import { Button, Form } from "react-bootstrap";
import { Dish } from "../api";
import { useState } from "react";
import NavBarComp from "./NavBarComp";
import React from "react";

function CreateDish() {

    const[name, setName] = useState('');
    const[image, setImage] = useState('');
    const[description, setDescription] = useState('');
    const[categoryId, setCategoryId] = useState(0);
    const[price, setPrice] = useState(0);
    const[nature, setNature] = useState('');

    const data = {
        dishName: name,
        dishImage: image,
        dishDescription: description,
        dishPrice: price,
        dishNature: nature
    }

    function handleSubmit(e:any) {
        // e.preventDefault();
        Dish.create(data, categoryId);
        console.log('category added');
    }

    return (
        <React.Fragment>
            <NavBarComp/>
            <div className="container">
                <h1>Add New Dish</h1>
                <Form style={containerStyles}>
                    <Form.Group className="mb-3">
                        <Form.Label>Select Category</Form.Label>
                        <Form.Control type="text" id="menuId" value={categoryId} onChange={(e) => setCategoryId(parseInt(e.target.value))} placeholder="Enter Category Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Dish Name</Form.Label>
                        <Form.Control type="text" id="dishName" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Dish Name" />
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
                        <Form.Control type="number" id="dishPrice" value={price} onChange={(e) => setPrice(parseInt(e.target.value))}  placeholder="Enter Dish Price" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Dish Nature</Form.Label>
                        <Form.Control type="text" id="dishNature" value={nature} onChange={(e) => setNature(e.target.value)}  placeholder="Enter Dish Nature: (Veg, Nonveg, Vegan)" />
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

export default CreateDish;