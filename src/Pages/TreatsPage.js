import React from "react";
import ProductList from "../Components/ProductList/ProductList";

function TreatsPage()
{
    return(
        <div>
            <p>Treats Page</p>
            <ProductList productType="Treats" />
        </div>
    );
}

export default TreatsPage;