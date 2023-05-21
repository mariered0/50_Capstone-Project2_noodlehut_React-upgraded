import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import NoodleHutApi from "../api/api";

const MenuList = () => {

    // async function getCategoryList(){
    //     const res = await NoodleHutApi.getCategories();
    //     console.log('API Call - res:', res);
    // }
    // getCategoryList();
    // async function getUser(){
    //     const res = await NoodleHutApi.currentUser("test_admin");
    //     console.log('API Call - res:', res);
    // }
    // getUser();

    // const [categories, setCategories] = useState([]);
    // useEffect(() => {
    //     getCategoryList();
    // }, []);

    // async function getCategoryList() {
    //     const getData = await NoodleHutApi.getCategories();
    //     setCategories(getData);
    // }
    const [items, setItems] = useState([]);
    useEffect(() => {
        getMenu();
    }, []);

    async function getMenu() {
        const getData = await NoodleHutApi.getAllItems();
        setItems(getData);
    }
   

    if (!items) return <h1>Loading...</h1>;

    return (
        <div>
            <h1>Menu list</h1>

                {items.map((item, index, category) => (
                    <CategoryCard 
                        key={index}
                        category={category.categoryName}
                    />
                    ))}

            
        </div>
    )
}

export default MenuList;