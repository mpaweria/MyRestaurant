import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login() {

    // creating states for email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // state for error on invalid login
    const [error, setError] = useState('');

    // initilising useNagivate 
    const navigate = useNavigate();

    function handleSubmit(e:any){
        e.preventDefault();

        // statically checking the login ids
        if(email === 'admin@gmail.com' && password === '1234'){
            // using useNagivate to navigate to home page
            navigate('/Home');
        }
        else{
            // setting error message
            setError('Invalid Email or Password!');
        }

    }

    return (
            <Form className="container" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                { 
                    // alert the error if error is not null
                    error ? <Alert variant="danger">{error}</Alert> : null
                }
                <Button variant="primary" type="submit"> 
                    Submit
                </Button>
            </Form>
    )
}

export default Login;