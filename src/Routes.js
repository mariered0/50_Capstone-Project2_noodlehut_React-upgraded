import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./home/Home";
import NavBar from "./nav/NavBar";

function Routes() {
    return (
        <BrowserRouter>
            <NavBar />

            <Route exact path="/">
                <Home />
            </Route>
        </BrowserRouter>
    )
};

export default Routes;