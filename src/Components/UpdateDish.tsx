import { useEffect, useState } from "react";
import { Dish } from "../api";
import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import NavBarComp from "./NavBarComp";
import { useParams } from "react-router-dom";

function UpdateCategory() {

    const[image, setImage] = useState('');
    const[description, setDescription] = useState('');
    const[price, setPrice] = useState(0);
    const[nature, setNature] = useState('');
    const[name, setName] = useState('');

    const params = useParams();

    const data = {
        dishId: params.id,
        dishName: name,
        dishPrice: price,
        dishDescription: description,
        dishImage: image,
        dishNature: nature
    }
    
    function handleSubmit(e:any) {
        e.preventDefault();
        Dish.update(data, parseInt(params.id || ''));
    }


    async function getData() {
        const dishData = await Dish.getById(parseInt(params.id || ''));
        setName(dishData.dishName);
        setImage(dishData.dishImage);
        setDescription(dishData.dishDescription);
        setNature(dishData.dishNature);
        setPrice(dishData.dishPrice);
    }

    useEffect(()=>{
        getData();
    },[])

    return (
        <React.Fragment>
            <NavBarComp/>
            <div className="container">
                <h1>Update Dish</h1>
                <Form style={containerStyles}>
                    <Form.Group className="mb-3">
                        <Form.Label>Select Dish</Form.Label>
                        <Form.Control type="text" id="dishId" value={params.id} disabled />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Dish Name</Form.Label>
                        <Form.Control type="text" id="dishName" value={name} disabled/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Dish Price</Form.Label>
                        <Form.Control type="text" id="dishPrice" value={price} onChange={(e) => setPrice(parseInt(e.target.value))}  placeholder="Enter the Dish Price" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Dish Description</Form.Label>
                        <Form.Control type="text" id="dishDescription" value={description} onChange={(e) => setDescription(e.target.value)}  placeholder="Enter the Description of the Dish" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Dish Image</Form.Label>
                        <Form.Control type="text" id="dishImage" value={image} onChange={(e) => setImage(e.target.value)}  placeholder="Enter the URL of the Image" />
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