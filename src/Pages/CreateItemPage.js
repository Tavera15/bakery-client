import React from "react";
import ProductMaker from "../Components/ProductMaker/ProductMaker";

function CreateItemPage()
{
    return(
        <div>
            <h1>Create Item</h1>
            <ProductMaker btnText="Create"/>
        </div>
    );
}

export default CreateItemPage;