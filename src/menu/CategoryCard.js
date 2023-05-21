import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard"
import NoodleHutApi from "../api/api";

const CategoryCard = ({category}) => {

    return (
        <div>
            <h2>{category}</h2>
            


            {/* {categories.map((category, idx) => (
                    <CategoryCard 
                        key={idx}
                        category={category}
                        items={items}
                    />
                    ))} */}



            {/* {items.Appetizers.map((item) => (
                <ItemCard 
                    itemName={item.itemName}
            />))} */}
            
        </div>
    )
}

export default CategoryCard;