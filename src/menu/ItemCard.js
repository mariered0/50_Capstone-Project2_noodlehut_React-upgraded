import React from "react";


const ItemCard = ({name, desc, price}) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{desc}</p>
            <p>{price}</p>
           
        </div>
    )
}

export default ItemCard;