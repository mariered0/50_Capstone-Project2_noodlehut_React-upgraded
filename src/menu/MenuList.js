import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import NoodleHutApi from "../api/api";

const MenuList = () => {

    const [categories, setCategories] = useState([]);
    const [items, setItems] = useState([]);
    useEffect(() => {
        getMenu();
        console.log('items from getData:', items);
    }, []);

    async function getMenu() {
        const getData = await NoodleHutApi.getAllItems();
        const categories = Object.keys(getData);
    
        setCategories(categories);
        setItems(getData);
    }

    if (!categories) return <h1>Loading...</h1>;

    return (
        <div>
            <h1>Menu list</h1>

                {categories.map((category, idx) => (
                    <CategoryCard 
                        key={idx}
                        category={category}
                    />
                    ))}

            
        </div>
    )
}

export default MenuList;