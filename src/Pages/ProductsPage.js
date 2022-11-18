import React from "react";
import Banner from "../Components/Banner/Banner.js";
import ProductList from "../Components/ProductList/ProductList.js"
import bannerImg from "../Content/Images/bg12.jpg";

function ProductsPage()
{
    return(
        <div>
            <Banner bannerImg={bannerImg} bannerTitle="Food & Accessories" />
            <ProductList productType = "" />
        </div>
    )
}

export default ProductsPage;