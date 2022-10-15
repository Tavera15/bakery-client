import React from "react";
import ProductList from "../Components/ProductList/ProductList";

function AccessoriesPage()
{
    return(
        <div>
            <p>Accessories Page</p>
            <ProductList productType = "Accessories" />
        </div>
    );
}

export default AccessoriesPage;