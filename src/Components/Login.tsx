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
            <Form className="container" style={containerStyles} onSubmit={handleSubmit}>
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
                <div className="text-center">
                    <Button variant="outline-dark" type="submit" style={{width: '12X0px'}}>Login</Button>
                </div>
            </Form>
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

export default Login;