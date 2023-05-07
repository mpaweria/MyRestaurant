import React, { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import { Menu } from "../api";
import NavBarComp from "./NavBarComp";
import { Col, Container, Row } from "react-bootstrap";
import { MenuType } from "../type";

function ViewMenu() {

    const [menus, setMenus] = useState([]);

    async function getData() {
        const data = await Menu.getAll();
        setMenus(data);
    }

    useEffect(() => {
        getData();
    }, []);
    
    return (
        <React.Fragment>
            <NavBarComp/>
            <h1>Enjoy our Menu</h1>
            <br />
            <Container>
                <Row>
                    {menus.length ? menus.map((m:MenuType) => {
                        return (
                            <Col sm>
                                <MenuCard menuName={m.menuName} menuImage={m.menuImage} menuDescription={m.menuDescription}/>
                            </Col>
                        )
                        }) : ''
                    }
                </Row>
            </Container>

        </React.Fragment>

    )
}

export default ViewMenu;