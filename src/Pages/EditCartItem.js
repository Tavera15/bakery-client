import React from 'react';
import Item from '../Components/ItemComp/Item.js';

function EditCartItem()
{
    function UpdateCartItem()
    {
        console.log("UpdateCart");
    }

    return(
        <div className="base-page">
            <Item btnText="Save" btnFunction={UpdateCartItem} />
        </div>
    );
}

export default EditCartItem;