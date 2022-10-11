import React from 'react';
import Item from '../Components/ItemComp/Item.js';

function ItemPage()
{
    function AddToCart()
    {
        console.log("Add to cart");
    }

    return(
        <div className="">
            <Item btnText="Add to cart" btnFunction={AddToCart} />
        </div>
    );
}

export default ItemPage;