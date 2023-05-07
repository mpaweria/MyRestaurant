import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Menu } from "../api";

function CreateMenu() {

    const[name, setName] = useState('');
    const[image, setImage] = useState('');
    const[description, setDescription] = useState('');

    const data = {
        menuName: name,
        menuImage: image,
        menuDescription: description
    }

    function handleSubmit(e:any) {
        Menu.create(data);
    }

    return (
        <div className="container">
            <h1>Add New Menu</h1>
            <Form style={containerStyles}>
                <Form.Group className="mb-3">
                    <Form.Label>Menu Name</Form.Label>
                    <Form.Control type="text" id="menuName" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Menu Name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Menu Image</Form.Label>
                    <Form.Control type="text" id="menuImage" value={image} onChange={(e) => setImage(e.target.value)}  placeholder="Enter the URL of the Image" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Menu Description</Form.Label>
                    <Form.Control type="text" id="menuDescription" value={description} onChange={(e) => setDescription(e.target.value)}  placeholder="Enter the Description of the Menu" />
                </Form.Group>
                <Button onClick={handleSubmit} variant="outline-dark" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
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

export default CreateMenu;
