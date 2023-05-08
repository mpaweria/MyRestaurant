import { useEffect, useState } from "react";
import { Category } from "../api";
import React from "react";
import { Alert, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import NavBarComp from "./NavBarComp";
import { useParams } from "react-router-dom";

function UpdateCategory() {

    const[image, setImage] = useState('');
    const[description, setDescription] = useState('');
    const[name, setName] = useState('');
    const[success, setSuccess] = useState('');
    const[error, setError] = useState('');

    const params = useParams();

    const data = {
        categoryId: params.id,
        categroyName: name,
        categoryImage: image,
        categoryDescription: description
    }

    function urlPatternValidation(URL:any): boolean {
        const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');    
        return regex.test(URL);
      };
    
    function handleSubmit(e:any) {
        e.preventDefault();
        try{
            if(urlPatternValidation(image)){
                Category.update(data, parseInt(params.id || ''));
                setSuccess('Category Updated Successfully');
            }else{
                setError('Invalid Image URL')
            }            
        }catch(e){
            setError("Category not updated");
        }        
    }

    async function getData(){
        const categoryData = await Category.getById(parseInt(params.id || ''));
        setName(categoryData.categroyName);
        setImage(categoryData.categoryImage);
        setDescription(categoryData.categoryDescription);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <React.Fragment>
            <NavBarComp/>
            <div className="container">
                <h1>Update Category</h1>
                {success ? <Alert variant="success">{success}</Alert> : null}
                {error ? <Alert variant="danger">{error}</Alert> : null}
                <Form className="container" style={containerStyles}>
                    <Form.Group className="mb-3">
                        <Form.Label>Category Id</Form.Label>
                        <Form.Control type="text" id="categoryId" value={parseInt(params.id || '')}  disabled />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Category Name</Form.Label>
                        <Form.Control type="text" id="categroyName" value={name}  disabled />
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