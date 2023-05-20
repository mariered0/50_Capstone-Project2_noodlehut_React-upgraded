import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./home/Home";
import NavBar from "./nav/NavBar";
import MenuList from "./menu/MenuList";

function Routes() {
    return (
        <BrowserRouter>
            <NavBar />

            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/menu">
                <MenuList />
            </Route>
        </BrowserRouter>
    )
};

export default Routes;