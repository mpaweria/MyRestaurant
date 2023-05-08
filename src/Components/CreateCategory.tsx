import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Category } from "../api";
import NavBarComp from "./NavBarComp";
import React from "react";

function CreateCategory() {

    const[name, setName] = useState('');
    const[image, setImage] = useState('');
    const[description, setDescription] = useState('');
    const[menuId, setMenuId] = useState(0);

    const data = {
        categroyName: name,
        categoryImage: image,
        categoryDescription: description
    }

    function handleSubmit(e:any) {
        e.preventDefault();
        Category.create(data, menuId);
    }

    return (
        <React.Fragment>
            <NavBarComp/>
            <div className="container">
                <h1>Add New Category</h1>
                <Form style={containerStyles}>
                    <Form.Group className="mb-3">
                        <Form.Label>Select Menu</Form.Label>
                        <Form.Control type="text" id="menuId" value={menuId} onChange={(e) => setMenuId(parseInt(e.target.value))} placeholder="Enter Category Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Category Name</Form.Label>
                        <Form.Control type="text" id="categoryName" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Category Name" />
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

export default CreateCategory;