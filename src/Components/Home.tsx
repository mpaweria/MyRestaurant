import { useEffect, useState } from "react";
import NavBarComp from "./NavBarComp";
import { Menu } from "../api";
import { MenuType } from "../type";
import CarouselComp from "./CarouselComp";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home (){

    const navigate = useNavigate();

    return (
        <>
            <NavBarComp/>
            <CarouselComp/>
            <div className="container text-center">
                <h1 style={{marginTop: '25px', fontSize: '2.5em'}}>Welcome to</h1>
                <h1 style={{fontSize: '2.8em'}}>Maison du Gout</h1>
                <Button variant="dark" style={{padding: '10px', width: '200px', marginTop: '30px'}} onClick={() => navigate('/ViewMenu')}>Go To Menu</Button>
            </div>
        </>
    )
}

export default Home;