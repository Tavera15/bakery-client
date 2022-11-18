import React from "react";
import Banner from "../Components/Banner/Banner";
import ProductList from "../Components/ProductList/ProductList";
import bannerImg from "../Content/Images/bg11.jpg";

function AccessoriesPage()
{
    return(
        <div>
            <Banner bannerImg={bannerImg} bannerTitle="Fashionable Accessories" />
            <ProductList productType = "Accessories" />
        </div>
    );
}

export default AccessoriesPage;