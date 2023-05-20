import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import NoodleHutApi from "../api/api";

const MenuList = () => {

    async function getCategoryList(){
        const res = await NoodleHutApi.getCategories();
        console.log('API Call - res:', res);
    }
    getCategoryList();
    // async function getUser(){
    //     const res = await NoodleHutApi.currentUser("test_admin");
    //     console.log('API Call - res:', res);
    // }
    // getUser();

    // const [categories, setCategories] = useState([]);
    // useEffect(() => {
    //     getCategoryList();
    //     console.log(categories);
    // }, []);

    // async function getCategoryList() {
    //     const getData = await NoodleHutApi.getCategories();
    //     setCategories(getData);
    // }
    // getCategoryList();
   

    // if (!categories) return <h1>Loading...</h1>;

    return (
        <div>
            <h1>Menu list</h1>

                {/* {categories.map((category) => (
                    <CategoryCard 
                        key={category.categoryName}
                        category={category.categoryName}
                    />
                    ))} */}

            
        </div>
    )
}

export default MenuList;