import React from "react";
import "./ProductCard.css";

function ProductCard()
{
    return(
        <div className="product-card-container">
            <div className="product-card-interior">
                <div className="img-container">
                    <img src="https://placehold.jp/300x300.png" alt="cardimg"/>
                </div>
                <div className="card-info">
                    <p>Product Name</p>
                    <p>$69.00</p>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;