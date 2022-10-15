import React from 'react';
import './InvoiceDoc.css';

const Invoice = React.forwardRef((props, ref) =>
{
    return(
        <div className="container-fluid col-lg-8 col-md-12" ref={ref}>
            <div id="ui-view" data-select2-id="ui-view">
                <div>
                    <div className="card">
                        <div className="card-header text-center">Invoice:
                            <strong> #{props.data.invoiceID}</strong>
                        </div>
                        <div className="card-body">

                            { props.data.companyLogo !== "" && props.data.companyLogo !== null
                                ? <div className="col-lg-12" id="logo-cont">
                                     <img id="logo-img" src={props.data.companyLogo} alt="logo"/>
                                 </div>

                                :<div></div>
                            }

                            <div className="col-lg-12 mb-4">
                                <div className="row">
                                    <div className="invoice-header-block lightgrey-border">
                                       <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>From</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="text-left">
                                                    <td>
                                                        <div>
                                                            <strong>Something Barkery</strong>
                                                        </div>
                                                        <div>{props.data.addressLine1}</div>
                                                        <div>{props.data.addressLine2}</div>
                                                        <div>
                                                            {props.data.city !== "" ? props.data.city + ", " : ""}
                                                            {props.data.state !== "" ? props.data.state + ", " : ""}
                                                            {props.data.zipCode}
                                                        </div>
                                                        <div>{props.data.emailAddress}</div>
                                                        <div>{props.data.phoneNumber}</div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table> 
                                    </div>
                                    
                                    <div className="invoice-header-block lightgrey-border">
                                        <table className="table ">
                                            <thead>
                                                <tr>
                                                    <th>To</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="text-left">
                                                    <td>
                                                        <div>
                                                            <strong>{props.data.customerName}</strong>
                                                        </div>
                                                        <div>{props.data.addressLine1}</div>
                                                        <div>{props.data.addressLine2}</div>
                                                        <div>
                                                            {props.data.city !== "" ? props.data.city + ", " : ""}
                                                            {props.data.state !== "" ? props.data.state + ", " : ""}
                                                            {props.data.zipCode}
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="invoice-header-block lightgrey-border">
                                        <table className="table ">
                                            <thead>
                                                <tr>
                                                    <th>Details</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="text-left">
                                                    <td>
                                                        <div>Invoice:
                                                            <strong> #{props.data.invoiceID}</strong>
                                                        </div>
                                                        <div>Date Created: {props.data.timeCreated}</div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>                             
                            <div className="table-responsive">
                                <table className="table table-striped text-left">
                                    <thead>
                                        <tr className="center-text">
                                            <th className="center">#</th>
                                            <th>Item</th>
                                            <th>Size</th>
                                            <th className="center">Quantity</th>
                                            <th className="right">Unit Cost</th>
                                            <th className="right">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.data.orderItems.map((p, i) => 
                                            <tr key={i}>
                                                <td className="center">{i+1}</td>
                                                <td className="left">{p.productName}</td>
                                                <td className="left">{p.sizeSelected}</td>
                                                <td className="center">{p.quantity}</td>
                                                <td className="right">${p.productPrice.toFixed(2)}</td>
                                                <td className="right">${(p.productPrice * p.quantity).toFixed(2)}</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            
                            <div className="col-lg-12">
                                <div className="row">

                                    <div className="invoice-footer-notes mb-4">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className="lightgrey-border text-center">Notes</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="text-left">
                                                    <td>
                                                        <div>
                                                            Thank You!
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="invoice-footer-calculations mb-4">
                                        <table className="table table-fixed">
                                            <thead>
                                                <tr>
                                                    <th className="lightgrey-border text-center">Calculations</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="lightgrey-border">
                                                    <td className="lightgrey-border">
                                                        <div className=""> 
                                                            <table className="table table-clear text-left">
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="left">
                                                                            <strong>Subtotal</strong>
                                                                        </td>
                                                                        <td className="right">${props.data.grandTotal}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="left">
                                                                            <strong>Grand Total</strong>
                                                                        </td>
                                                                        <td className="right">
                                                                            <strong>${props.data.grandTotal}</strong>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Invoice;