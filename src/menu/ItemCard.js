import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActiionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'; 

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });
  

const ItemCard = ({name, desc, price}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            
            <h3>{name}</h3>
            <p>{desc}</p>
            <p>{price}</p>
           
        </Card>
    )
}

export default ItemCard;