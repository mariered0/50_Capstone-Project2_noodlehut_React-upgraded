import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import NoodleHutApi from "../api/api";

const MenuList = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        getMenu();
    }, []);

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
            <h1>Menu list</h1>

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