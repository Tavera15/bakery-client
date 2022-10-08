import React from "react";
import "./BasketPage.css";
import BasketCard from "../Components/BasketCard/BasketCard.js";

function BasketPage()
{
    return(
        <div className="" id="basket-page">
            <div className="checkout-box-wrapper p-4">

                <div className="p-4 checkout-box mb-4">
                    <h3>Order Summary</h3>
                    <div className="checkout-details-box pt-4">
                        <div className="single-detail-box mb-4">
                            <h5>Subtotal: </h5>
                            <h5>$220.00</h5>
                        </div>
                        <div className="single-detail-box mb-4">
                            <h5>Delivery: </h5>
                            <h5>(?)</h5>
                        </div>
                        <div className="single-detail-box mb-4">
                            <h5>Total</h5>
                            <h5>$100.00</h5>
                        </div>
                    </div>
                    <button className="btn btn-dark checkout-btn mt-4"><h4 className="checkout-btn-text">Checkout</h4></button>
                </div>
            </div>
            <div className="basket-items p-4">
                <BasketCard />
                <hr/>
                <BasketCard />
                <hr/>
                <BasketCard />
                <hr/>
                <BasketCard />
                <hr/>
                <BasketCard />
                <hr/>
            </div>
        </div>
    );
}

export default BasketPage;

// https://mk0abtastybwtpirqi5t.kinstacdn.com/wp-content/uploads/shopping-cart-payment-options.jpg