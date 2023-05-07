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
            <h1>This is Home Page</h1>
            <br/>
            <Button onClick={() => navigate('/ViewMenu')}>Go To Menu</Button>
        </>
    )
}

export default Home;