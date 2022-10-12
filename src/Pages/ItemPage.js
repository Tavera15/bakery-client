import React, { useState, useEffect } from 'react';
import Item from '../Components/ItemComp/Item.js';
import axios from "axios";
import { useParams } from "react-router";
import NotFoundPage from "./NotFoundPage";

function ItemPage()
{
    const [productData, setProductData] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadStatus, setLoadStatus] = useState();
    const params = useParams();

    useEffect(() => {
        async function getProductData()
        {
            const config = {}

            const url = process.env.REACT_APP_API_URL + "/Products/GetProduct/" + params.id;            
            await axios.get(url, config)
                .then((res) => {
                    console.log(res.data)

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

    function AddToCart()
    {
        console.log("Add to cart");
    }

    return(
        <div className="">
            {isLoaded ? 
                <div >
                    {loadStatus === 200 && productData.isProductAvailable
                    ? <Item btnText="Add to cart" btnFunction={AddToCart} productData={productData} />
                    : <NotFoundPage />
                    }
                </div>

                : <div style={{"color": "black"}}>Loading...</div>
            }
        </div>
    );
}

export default ItemPage;