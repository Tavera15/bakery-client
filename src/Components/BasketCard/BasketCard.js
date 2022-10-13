import React from 'react';
import './BasketCard.css';

function BasketCard(props)
{
    return(
        <div className="mb-4 basket-card-container">

            <div className="basket-card-product">
                <div className="basket-img-and-details-container">
                    <div className="basket-card-img-container">
                        <img 
                            className="basket-card-img"
                            src={props.productImg}
                            alt="props.name"   
                            />
                    </div>
                    <div className="basket-product-details-container">
                        <h5 className="basket-product-name">{props.name}</h5>
                        <h6 className="qty-details">Qty: {props.qty} <span>${props.price.toFixed(2)} / Each</span></h6>
                        <h6 className="qty-details">{props.size !== "" ? "Size: " + props.size : "" }</h6>
                        <h6>${props.total.toFixed(2)}</h6>
                    </div>
                </div>
                <div>
                    <button type="button" className="btn btn-link">Edit</button>
                    <button type="button" className="btn btn-link">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default BasketCard;