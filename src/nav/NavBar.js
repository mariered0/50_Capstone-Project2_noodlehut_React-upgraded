import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <NavLink exact to="/">
          <Typography variant="h6" className={classes.title}>
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

    </div>
  );
}

export default NavBar;
