import React from 'react';
import { Button } from 'react-bootstrap';
import "./Item.css"

function ProductMaker(props)
{
    return(
        <div className="item-component">
            <div id="demo" className="carousel slide item-carousel p-4" data-ride="carousel">

                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                </ul>

                <div className="carousel-inner">
                    <div className="carousel-item active item-img card-img-top">
                        <img src="https://ji4n127gpjg29plb11l88dg7-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/iStock-182444072-681x1024.jpg" 
                        alt="Los Angeles"/>
                    </div>
                    <div className="carousel-item item-img card-img-top">
                        <img src="https://miro.medium.com/max/2880/1*RkMinN_ZS-mW1uqh1rANag.jpeg" 
                        alt="New York"/>
                    </div>
                </div>

                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>

            </div>
                
            <div className="item-data p-4">

                <div className="form-group">
                    <label htmlFor="productName">Product Name</label>
                    <input required type="text" className="form-control" id="productName" />
                </div>

                <div className="form-group">
                    <label htmlFor="productPrice">Product Price</label>
                    <input required type="number" min="0.00" step="0.01" className="form-control" id="productPrice" />
                </div>

                <div className="form-group">
                    <label htmlFor="productDescription">Description</label>
                    <input required className="form-control" id="productDescription" />
                </div>

                < hr />

                <Button type="button" className="btn btn-dark col-12 mb-4"><h4 className="add-to-cart-btn-text">{props.btnText}</h4></Button>

            </div>

        </div>
    );
}

export default ProductMaker;