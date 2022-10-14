import React from 'react';
import { Link } from 'react-router-dom';
import './BasketCard.css';
import axios from "axios";
import { useHistory } from "react-router";


function BasketCard(props)
{
    const history = useHistory();

    async function RemoveCartItem(e, basketItemId)
    {
        const url = process.env.REACT_APP_API_URL + "/Basket/RemoveFromCart/" + basketItemId;
        const basketId = localStorage.getItem("basketId");
        const config = {headers: {"basketId": basketId}};

        await axios.delete(url, config)
            .then((res) => {
                if(res.status !== 200)
                {
                    console.log(res)
                }

                window.location.reload();
            })
    }

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
                    <Link to={"/Cart/EditCartItem/" + props.itemId} type="button" className="btn btn-link">Edit</Link>
                    <button onClick={(e) => RemoveCartItem(e, props.itemId)} type="button" className="btn btn-link">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default BasketCard;