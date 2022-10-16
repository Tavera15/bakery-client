import React,{useEffect, useState} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import NotFoundPage from "./NotFoundPage";

function ProductManager()
{
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadStatus, setLoadStatus] = useState();

    const [products, setProducts] = useState([]);

    async function handleDelete(productId)
    {
        const url = process.env.REACT_APP_API_URL + "/Products/DeleteProduct/" + productId;
        const config = {};

        await axios.delete(url, config)
            .then((res) => {
                if(res.status !== 200)
                {
                    console.log(res)
                }

                window.location.reload();
            })
    }

    useEffect(() => {
        async function getProducts()
        {
            const url = process.env.REACT_APP_API_URL + "/Products/GetProducts/";            
            const config = {}
            
            await axios.get(url, config)
                .then((res) => {
                    setProducts(res.data);
                    setLoadStatus(res.status);
                })
                .catch((err) => {
                    setLoadStatus(err.response.status);
                })
                .finally(() => {
                    setIsLoaded(true);
                })
        }
        
        getProducts();
    },[]);

    return(
        <div>
            {isLoaded ? 
                <div>
                    <Link className="btn btn-primary m-4" to="/Manager/CreateItem">Create Item</Link>
                    {loadStatus === 200 ?
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr className="">
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Is Available?</th>
                                    <th scope="col">Date Modified</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map((o, i) =>
                                            <tr key={i} className="">
                                                <th scope="row">{o.name}</th>
                                                <td>{"$" + o.unitPrice.toFixed(2)}</td>
                                                <td>{o.isProductAvailable ? "Available" : "Out of Sotck"}</td>
                                                <td>{o.lastTimeModified}</td>
                                                <td><Link to={"/Manager/EditItem/" + o.id} className="btn-warning btn">Edit</Link></td>
                                                <td><Button onClick={(e) => handleDelete(o.id)} className="btn btn-danger">Delete</Button></td>
                                            </tr>
                                        )
                                    }
                                    
                                </tbody>
                            </table>
                        </div>
                    
                    : <NotFoundPage />
                    }
                </div>

                : <div style={{"color": "black"}}>Loading...</div>
            }
        </div>
    )
}

export default ProductManager;