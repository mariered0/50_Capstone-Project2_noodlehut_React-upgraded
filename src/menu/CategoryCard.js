import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import NoodleHutApi from "../api/api";
import { Container, Grid, Typography } from "@material-ui/core";
import useStyles from "./CategoryCard.styles";

const CategoryCard = ({ category }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems();
  }, []);

  async function getItems() {
    const getData = await NoodleHutApi.getAllItems();
    setItems(getData);
  }

  const classes = useStyles();

  return (
    <>
    {/* <Container maxWidth="md"> */}
      <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
        {category}
      </Typography>

      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {items
            .filter((item) => item.categoryName === `${category}`)
            .map((filteredItem) => (
              <ItemCard
                key={filteredItem.id}
                id={filteredItem.id}
                name={filteredItem.itemName}
                desc={filteredItem.itemDesc}
                price={filteredItem.itemPrice}
              />
            ))}
        </Grid>
      </Container>
    {/* </Container> */}
    </>
  );
};

export default CategoryCard;
