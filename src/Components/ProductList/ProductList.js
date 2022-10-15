import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";
import NotFoundPage from "../../Pages/NotFoundPage";

function ProductList(props)
{
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadStatus, setLoadStatus] = useState();

    const [productList, SetProductList] = useState([]);

    useEffect(() => {
        async function getProductData()
        {
            const config = {}

            const url = process.env.REACT_APP_API_URL + "/Products/GetProducts?itemType=" + props.productType;            
            await axios.get(url, config)
                .then((res) => {
                    console.log(res.data)
                    SetProductList(res.data);
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
    },[props.productType]);

    return(
        <div>
            {isLoaded ? 
                <div >
                    {loadStatus === 200
                    ? <div className="list-container">
                        {productList.map((p, i) =>
                            !p.isProductAvailable ? null
                            : <ProductCard key={i} name={p.name} img={p.images[0]} unitPrice={p.unitPrice} id={p.id} />
                        )}
                      </div>
                    : <NotFoundPage />
                    }
                </div>

                : <div style={{"color": "black"}}>Loading...</div>
            }
            
        </div>
    )
}

export default ProductList;