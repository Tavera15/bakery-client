import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./BasketPage.css";
import BasketCard from "../Components/BasketCard/BasketCard.js";

function BasketPage()
{
    const [basketItems, setBasketitems] = useState([]);
    const [total, setTotal] = useState(0);
    const [subtotal, setSubtotal] = useState(0);

    const [customerName, setName] = useState("");
    useEffect(() => {
        async function getBasket()
        {
            const url = process.env.REACT_APP_API_URL + "/Basket/GetBasket/";            
            const basketId = localStorage.getItem("basketId");
            const config = {headers: {"basketId": basketId}}
            
            await axios.get(url, config)
                .then((res) => {
                    console.log(res.data)
                    setBasketitems(res.data.basketItems);
                    let accumulatedTotal = 0;

                    for(let i = 0; i < res.data.basketItems.length; i++)
                    {
                        const bi = res.data.basketItems[i];
                        accumulatedTotal += bi.product.unitPrice * bi.quantity;
                    }

                    setSubtotal(accumulatedTotal);
                    setTotal(accumulatedTotal);
                })
                .catch((err) => {
                })
        }
        
        getBasket();
    },[]);

    return(
        <div className="" id="basket-page">
            <div className="order-details">
                <div className="checkout-box-wrapper p-4">

                    <div className="p-4 checkout-box mb-4">
                        <h3>Order Summary</h3>
                        <div className="checkout-details-box pt-4">
                            <div className="single-detail-box mb-4">
                                <h5>Subtotal: </h5>
                                <h5>${subtotal.toFixed(2)}</h5>
                            </div>
                            <div className="single-detail-box mb-4">
                                <h5>Total</h5>
                                <h5>${total.toFixed(2)}</h5>
                            </div>
                        </div>
                        <button className="btn btn-dark checkout-btn mt-4"><h4 className="checkout-btn-text">Checkout</h4></button>
                    </div>
                </div>
                <div className="customer-data">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="customerName">Name</label>
                        <input className="form-control" id="customerName" placeholder="Customer Name" />
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="phone">Telephone</label>
                        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="form-control" id="phone" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress2">Address 2</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputState">State</label>
                            <input type="text" className="form-control" id="inputState" />
                        </div>
                        <div className="form-group col-md-2">
                        <label htmlFor="inputZip">Zip</label>
                        <input type="text" className="form-control" id="inputZip" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail">Email</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="" />
                    </div>
                </div>
            </div>
            
            <hr/>
            <div className="basket-items p-4">
                {basketItems.map((e, i) => 
                <div key={i}>
                    <BasketCard
                        itemId={e.basketItemId}
                        name={e.product.name}
                        size={e.sizeSelected}
                        qty={e.quantity} 
                        price={e.product.unitPrice} 
                        productImg={e.product.images[0] !== undefined ? e.product.images[0].imageSource : null} 
                        total={e.product.unitPrice * e.quantity} />
                    <hr/>
                </div>)}
                <hr/>
            </div>
        </div>
    );
}

export default BasketPage;

// https://mk0abtastybwtpirqi5t.kinstacdn.com/wp-content/uploads/shopping-cart-payment-options.jpg