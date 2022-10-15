import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard(props)
{
    return(
        <div className="product-card-container">
            <div className="product-card-interior">
                <Link to={"/Item/" + props.id} className="product-card-link">
                    <div className="img-container">
                        <img src={props.img.imageSource} alt={props.id} />
                        
                    </div>
                    <div className="card-info">
                        <p>{props.name}</p>
                        <p>${props.unitPrice.toFixed(2)}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default ProductCard;