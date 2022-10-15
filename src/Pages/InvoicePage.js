import React, {useRef, useState, useEffect} from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useReactToPrint } from 'react-to-print';
import NotFoundPage from "./NotFoundPage";
import Invoice from "../Components/Invoice/Invoice.js";

function InvoicePage()
{
    const [invoiceData, setInvoiceData] = useState({});    
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadStatus, setLoadStatus] = useState();
    
    const params = useParams();
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "Invoice " + invoiceData.invoiceID
    });
    

    useEffect(() => {
        async function getInvoiceData()
        {
            const url = process.env.REACT_APP_API_URL + "/Orders/GetOrder/" + params.id;            
            const config = {}

            await axios.get(url, config)
                .then((res) => {
                    console.log(res.data)
                    setInvoiceData(res.data);
                    setLoadStatus(res.status);
                })
                .catch((err) => {
                    setLoadStatus(err.response.status);
                })
                .finally(() => {
                    setIsLoaded(true);
                })
        }
        
        getInvoiceData();
    },[params.id]);

    return(
        <div>
            {isLoaded ?
                <div>
                    {loadStatus === 200 ?
                        <div>
                            <button
                                        type="button"
                                        className="p-2 mb-4 btn btn-success"
                                        onClick={handlePrint}>
                                        {" "}
                                        Print Invoice{" "}
                                    </button>
                                    <Invoice data={invoiceData} ref={componentRef} />
                        </div>
                    : <div style={{"color": "white"}}>Loading...</div>
                    }
                </div>
                    
                : <NotFoundPage />
            }
        </div>
    )
}

export default InvoicePage;