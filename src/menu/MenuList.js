import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import NoodleHutApi from "../api/api";

const MenuList = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getMenu();
    }, []);

    async function getMenu() {
        const getData = await NoodleHutApi.getAllItems();
        const categories = Object.keys(getData);
        setCategories(categories);
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