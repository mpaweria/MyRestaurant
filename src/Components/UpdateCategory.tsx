import { useState } from "react";
import { Category } from "../api";
import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import NavBarComp from "./NavBarComp";

function UpdateCategory() {

    const[image, setImage] = useState('');
    const[description, setDescription] = useState('');
    const[categoryId, setCategoryId] = useState(0);

    const data = {
        categoryImage: image,
        categoryDescription: description
    }
    
    function handleSubmit(e:any) {
        e.preventDefault();
        Category.update(data, categoryId);
        console.log('category updated');
    }

    return (
        <React.Fragment>
            <NavBarComp/>
            <div className="container">
                <h1>Update Category</h1>
                <Form style={containerStyles}>
                    <Form.Group className="mb-3">
                        <Form.Label>Select Category</Form.Label>
                        <Form.Control type="text" id="categoryId" value={categoryId} onChange={(e) => setCategoryId(parseInt(e.target.value))} placeholder="Enter Category Name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Category Image</Form.Label>
                        <Form.Control type="text" id="categoryImage" value={image} onChange={(e) => setImage(e.target.value)}  placeholder="Enter the URL of the Image" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Category Description</Form.Label>
                        <Form.Control type="text" id="categoryDescription" value={description} onChange={(e) => setDescription(e.target.value)}  placeholder="Enter the Description of the Category" />
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