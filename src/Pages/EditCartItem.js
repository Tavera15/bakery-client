import React, { useState, useEffect } from 'react';
import Item from '../Components/ItemComp/Item.js';
import { useParams, useHistory } from "react-router";
import axios from 'axios';
import NotFoundPage from './NotFoundPage.js';

function EditCartItem()
{
    const [productData, setProductData] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadStatus, setLoadStatus] = useState();
    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        async function getProductData()
        {
            const url = process.env.REACT_APP_API_URL + "/Basket/GetBasketItem/" + params.id;            
            const basketId = localStorage.getItem("basketId");
            const config = {headers: {"basketId": basketId}}
            console.log(basketId)
            await axios.get(url, config)
                .then((res) => {
                    const body = {
                        "name": res.data.product.name,
                        "description": res.data.product.description,
                        "unitPrice": res.data.product.unitPrice,
                        "availableSizes": res.data.product.availableSizes,
                        "images": res.data.product.images,
                        "qty": res.data.quantity,
                        "sizeSelected": res.data.sizeSelected,
                    }
                    setLoadStatus(res.status);
                    setProductData(body);
                })
                .catch((err) => {
                    setLoadStatus(err.response.status);
                })
                .finally(() => {
                    setIsLoaded(true);
                })
        }
        
        getProductData();
    },[params.id]);

    async function UpdateCartItem(e, productBody)
    {
        const url = process.env.REACT_APP_API_URL + "/Basket/UpdateCartItem/" + params.id;
        const basketId = localStorage.getItem("basketId");
        const config = {headers: {"basketId": basketId}};

        await axios.put(url, productBody, config)
            .then((res) => {
                if(res.status === 200)
                {
                    // Save basketId
                    localStorage.setItem("basketId", res.data.basketId);
                    history.push("/cart");
                }
                else
                {
                    // Display Errors
                    history.push("/Item/" + params.id);
                    console.log(res)
                }
            })
    }

    return(
        <div className="base-page">
            {isLoaded ? 
                <div >
                    {loadStatus === 200
                    ? <Item btnText="Save" handleAction={UpdateCartItem} productData={productData} />
                    : <NotFoundPage />
                    }
                </div>

                : <div style={{"color": "black"}}>Loading...</div>
            }
            
        </div>
    );
}

export default EditCartItem;