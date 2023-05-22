import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { AppBar, Toolbar, Typography, Button, CssBaseline } from "@material-ui/core";

function NavBar() {

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <NavLink exact to="/">
          <Typography variant="h6">
            NoodleHut
          </Typography>
          </NavLink>

          <NavLink exact to="/">
          <Button color="inherit">Home</Button>
          </NavLink>
        
          <NavLink exact to="/menu">
          <Button color="inherit">Menu</Button>
          </NavLink>

          <NavLink exact to="/user">
          <Button color="inherit">Profile</Button>
          </NavLink>
        </Toolbar>
      </AppBar>

    </>
  );
}

export default NavBar;
