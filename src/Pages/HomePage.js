import React, { useEffect, useState } from "react";
import ProductList from "../Components/ProductList/ProductList";
import "./HomePage.css"
import skye from "../Content/Images/SkyeGoggles.png";
import skyeLines from "../Content/SkyeLines.txt";

function HomePage()
{
    const [skyeLine, setSkyeLine] = useState("");

    useEffect(() => {
        function getSkyeLine()
        {
            fetch(skyeLines)
            .then((r) => r.text())
            .then(text  => (setSkyeLine(text.split('\n')[Math.floor(Math.random() * text.split('\n').length)])))
        }
        
        getSkyeLine();
    }, [])

    return(
        <div>

            <div className="promo1">
                <div className="inner-promo1">
                    <h1>Delicious Handmade Dog Treats</h1>
                </div>
            </div>

            <div className="mt-4">
                <h2>Check the Latest</h2>
                <ProductList productType="" />
            </div>

            <div id="about-me">
                <img className="skye-pic" src={skye} alt="skye" />
                <div className="skye-info">
                    <h1 className="skye-name">My name is Skye</h1>
                    <h3 className="skye-mission">& our mission is to make other dogs happy with delicious and special treats!</h3>
                    <h3 className="skye-line">{skyeLine}</h3>
                </div>
            </div>
        </div>
    )
}

export default HomePage;