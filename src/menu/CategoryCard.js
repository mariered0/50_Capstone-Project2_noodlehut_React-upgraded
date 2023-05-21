import React from "react";
import ItemCard from "./ItemCard"
import NoodleHutApi from "../api/api";

const CategoryCard = ({category}) => {
    

    return (
        <div>
            <h2>{category}</h2>
            <ItemCard />
        </div>
    )
}

export default CategoryCard;