import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Menu } from "../api";
import NavBarComp from "./NavBarComp";
import React from "react";

function CreateMenu() {

    const[name, setName] = useState('');
    const[image, setImage] = useState('');
    const[description, setDescription] = useState('');
    const[success, setSuccess] = useState('');
    const[error, setError] = useState('');

    const data = {
        menuName: name,
        menuImage: image,
        menuDescription: description
    }

    function urlPatternValidation(URL:any): boolean {
        const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');    
        return regex.test(URL);
      };

    function handleSubmit(e:any) {
        e.preventDefault();
        try{
            if(urlPatternValidation(image)){
                Menu.create(data);
                setSuccess('Menu Created Successfully');
            }else{
                setError('Invalid Image URL')
            }            
        }catch(e){
            setError("Menu not created");
        }
    }

    return (
        <React.Fragment>
            <NavBarComp/>
            <div className="container">
                <h1>Add New Menu</h1>
                {success ? <Alert variant="success">{success}</Alert> : null}
                {error ? <Alert variant="danger">{error}</Alert> : null}
                <Form className="container" style={containerStyles}>
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

export default CreateMenu;
