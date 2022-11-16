import React, { useState, useEffect } from 'react';
import Item from '../Components/ItemComp/Item.js';
import axios from "axios";
import { useParams, useHistory } from "react-router";
import NotFoundPage from "./NotFoundPage";

function ItemPage()
{
    const [productData, setProductData] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadStatus, setLoadStatus] = useState();
    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        async function getProductData()
        {
            const url = process.env.REACT_APP_API_URL + "/Products/GetProduct/" + params.id;            
            const basketId = localStorage.getItem("basketId");
            const config = {headers: {"basketId": basketId}}

            await axios.get(url, config)
                .then((res) => {
                    setProductData(res.data);
                    setLoadStatus(res.status);
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

    async function AddToCart(e, productBody)
    {
        const url = process.env.REACT_APP_API_URL + "/Basket/AddToCart";
        const basketId = localStorage.getItem("basketId");
        const config = {headers: {"basketId": basketId}}

        await axios.post(url, productBody, config)
            .then((res) => {
                if(res.status === 201)
                {
                    // Save basketId
                    localStorage.setItem("basketId", res.data.basketId);
                    history.push("/cart");
                }
            })
            .catch((err) => {
                console.log(err)
                alert(err.response.data)
            })
    }

    return(
        <div className="">
            {isLoaded ? 
                <div >
                    {loadStatus === 200 && productData.isProductAvailable
                    ? <Item btnText="Add to cart" 
                        handleAction={AddToCart} 
                        productData={productData} />
                    : <NotFoundPage />
                    }
                </div>

                : <div style={{"color": "black"}}>Loading...</div>
            }
        </div>
    );
}

export default ItemPage;