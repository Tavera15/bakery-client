import React from "react";
import Banner from "../Components/Banner/Banner";
import ProductList from "../Components/ProductList/ProductList";
import bannerImg from "../Content/Images/bg41.jpg";

function TreatsPage()
{
    return(
        <div>
            <Banner bannerImg={bannerImg} bannerTitle="Delicious Treats" />
            <ProductList productType="Treats" />
        </div>
    );
}

export default TreatsPage;