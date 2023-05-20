import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {


        return (
            <nav className="Navbar">
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to="/menu">Menu</NavLink>
                <NavLink exact to="/user">Profile</NavLink>
            </nav>
        )
    }
    

export default NavBar;