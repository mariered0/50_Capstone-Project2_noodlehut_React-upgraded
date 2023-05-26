import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import NoodleHutApi from "../api/api";
import { Container, Typography } from "@material-ui/core";
import useStyles from "./MenuList.styles";

const MenuList = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        getMenu();
    }, []);

    const classes = useStyles();

    async function getMenu() {
        const getData = await NoodleHutApi.getAllItems();

        //set only categoryNames
        const categories = getData.map(({categoryName}) => categoryName);
        const filtered = categories.filter(function (category, next) {return categories.indexOf(category) === next });
        setItems(filtered);
    }

    if (!items) return <h1>Loading...</h1>;

    return (
        <div>
            <div className={classes.heroContent}>
            <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Menu
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Enjoy our authentic Thai food.
            </Typography>
           
          </Container>
            </div>

                {items.map((categoryName, idx) => (
                    <CategoryCard 
                        key={idx}
                        category={categoryName}
                    />
                    ))}
          
        </div>
    )
}

export default MenuList;