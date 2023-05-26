import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
} from "@material-ui/core";
import useStyles from "./ItemCard.styles";
import defaultImg from "../image/image_unavailable.png";

const ItemCard = ({ id, name, desc, price }) => {
  const classes = useStyles();

  return (
    
        <Grid item key={id} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            {/* <CardMedia 
                className={classes.cardMedia}
                image={`${images}.${name.toLowerCase()}.png`}
                title={`Image of ${name}`}
            /> */}
            <CardMedia
              className={classes.cardMedia}
              image={defaultImg}
              title={`Image of ${name}`}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5">
                {name}
              </Typography>
              <Typography>{desc}</Typography>
              <Typography>{price}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Add
              </Button>
            </CardActions>
          </Card>
        </Grid>
     
  );
};

export default ItemCard;
