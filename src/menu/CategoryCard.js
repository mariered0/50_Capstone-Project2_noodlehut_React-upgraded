import React from "react";
import ItemCard from "./ItemCard"
import NoodleHutApi from "../api/api";

const CategoryCard = (category) => {
    return (
        <div>
            <h1>Category card</h1>
            <p>{category}</p>
            <ItemCard />
        </div>
    )
}

export default CategoryCard;