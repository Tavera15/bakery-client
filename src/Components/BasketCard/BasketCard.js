import React from 'react';
import './BasketCard.css';

function BasketCard()
{
    return(
        <div className="mb-4 basket-card-container">

            <div className="basket-card-product">
                <div className="basket-img-and-details-container">
                    <div className="basket-card-img-container">
                        <img 
                            className="basket-card-img"
                            src="https://dummyimage.com/360/aaa/aaahttps://dummyimage.com/640x360/aaa/aaa"
                            alt="product"   
                            />
                    </div>
                    <div className="basket-product-details-container">
                        <h5 className="basket-product-name">Product Name - Limited Edition </h5>
                        <h6 className="qty-details">Qty: 1 <span>$20.00 / Each</span></h6>
                        <h6>$220.00</h6>
                    </div>
                </div>
                <div className="basket-product-price-container">
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