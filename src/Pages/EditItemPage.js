import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router";
import ProductMaker from "../Components/ProductMaker/ProductMaker";
import NotFoundPage from "./NotFoundPage";

function EditItemPage()
{
    const [productData, setProductData] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadStatus, setLoadStatus] = useState();
    const history = useHistory();
    const params = useParams();
    
    async function EditItem(e, productBody)
    {
        const url = process.env.REACT_APP_API_URL + "/Products/UpdateProduct/" + params.id;
        const config = {}
        console.log(productBody)
        await axios.put(url, productBody, config)
            .then((res) => {
                if(res.status === 200)
                {
                    history.push("/Manager/ProductManager");
                }
                else
                {
                    history.push("/")
                }
            })
    }

    useEffect(() => {
        async function getProductData()
        {
            const config = {}

            const url = process.env.REACT_APP_API_URL + "/Products/GetProduct/" + params.id;            
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

    return(
        <div>
            {isLoaded ? 
                <div >
                    {loadStatus === 200 ?
                        <div>
                            <h1>Edit Item</h1>
                            <ProductMaker btnText="Edit" oldValues={productData} handleAction={EditItem} />
                        </div>
                    
                    : <NotFoundPage />
                    }
                </div>

                : <div style={{"color": "black"}}>Loading...</div>
            }
        </div>
    );
}

export default EditItemPage;
