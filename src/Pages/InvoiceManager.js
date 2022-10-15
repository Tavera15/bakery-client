import React,{useEffect, useState} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

function InvoiceManager()
{
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadStatus, setLoadStatus] = useState();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function getOrders()
        {
            const url = process.env.REACT_APP_API_URL + "/Orders/GetOrders/";            
            const config = {}
            
            await axios.get(url, config)
                .then((res) => {
                    setOrders(res.data);
                    setLoadStatus(res.status)
                })
                .catch((err) => {
                    setLoadStatus(err.response.status)
                })
                .finally(() => {
                    setIsLoaded(true);
                })
        }
        
        getOrders();
    },[]);

    return(
        <div>
            {isLoaded ? 
                <div>
                    {loadStatus === 200 ?
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr className="">
                                    <th scope="col">Customer</th>
                                    <th scope="col">Id</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orders.map((o, i) =>
                                            <tr key={i} className="">
                                                <td>{o.customerName}</td>
                                                <th scope="row"><Link to={"/Invoice/" + o.invoiceID}>{o.invoiceID}</Link></th>
                                                <td>{o.timeCreated}</td>
                                                <td>{"$" + o.grandTotal}</td>
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

export default InvoiceManager;