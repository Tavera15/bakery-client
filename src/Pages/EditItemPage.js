import React from "react";
import ProductMaker from "../Components/ProductMaker/ProductMaker";

function EditItemPage()
{
    return(
        <div>
            <h1>Edit Item</h1>
            <ProductMaker btnText="Edit"/>
        </div>
    );
}

export default EditItemPage;