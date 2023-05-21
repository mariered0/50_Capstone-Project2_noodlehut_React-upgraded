import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard"
import NoodleHutApi from "../api/api";

const CategoryCard = ({category}) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        getItems();
    }, []);

    async function getItems() {
        const getData = await NoodleHutApi.getAllItems();
        setItems(getData);
    }

    return (
        <div>
            <h2>{category}</h2>

            {items.filter(item => item.categoryName === `${category}`).map(filteredItem => (
                <ItemCard 
                    key={filteredItem.id}
                    name={filteredItem.itemName}
                    desc={filteredItem.itemDesc}
                    price={filteredItem.itemPrice}
                />
            ))}
            
        </div>
    )
}

export default CategoryCard;