import { Button } from "react-bootstrap";
import CarouselComp from "./CarouselComp";
import NavBarComp from "./NavBarComp";
import { useNavigate } from "react-router-dom";

function LandingPage() {

    const navigate = useNavigate();
    
    return(
        <>
            <CarouselComp/>
            <div className="container text-center">
                <h1 style={{marginTop: '25px', fontSize: '2.5em'}}>Welcome to</h1>
                <h1 style={{fontSize: '2.8em'}}>Maison du Gout</h1>
                <Button variant="dark" style={{padding: '10px', width: '200px', marginTop: '30px'}} onClick={() => navigate('/Login')}>Login As Admin</Button>
            </div>
        </>
    )
}

export default LandingPage;