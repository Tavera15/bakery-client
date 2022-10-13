import React, { useState } from 'react';
import './Item.css'
import plusSign from '../../Content/Icons/round-plus.svg';
import minusSign from '../../Content/Icons/round-minus.svg';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';

function Item(props)
{
    const[quantity, setQuantity] = useState(1);
    const[sizeSelected, setSizeSelected] = useState("");

    const params = useParams();

    function handleSave(e)
    {
        const body = {
            "productId": params.id,
            "quantity": quantity,
            "sizeSelected": sizeSelected
        }

        props.handleAction(e, body);
    }

    function onQuantityUpdate(event, amount){
        const newQty = quantity + amount <= 1 ? 1 : quantity + amount;
        setQuantity(newQty);
    }

    function onSizeSelect(event, newSize, boxNum){
        setSizeSelected(newSize);

        let allSizeBoxes = document.getElementsByClassName("size-box");
        
        for(let i = 0; i < allSizeBoxes.length; i++)
        {
            if(i === boxNum)
                allSizeBoxes[i].classList.add("size-box-selected");
            else
                allSizeBoxes[i].classList.remove("size-box-selected");
        }
        console.log(newSize)
    }

    return(
        <div className="item-component">
            <div id="demo" className="carousel slide item-carousel p-4" data-ride="carousel">

                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                </ul>

                <div className="carousel-inner">
                    {
                        props.productData.images.map((e, i) => 
                        <div key={i} className="carousel-item active item-img card-img-top">
                            <img src={e.imageSource} alt={i}/>
                        </div>
                        )
                    }
                </div>

                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>

            </div>
                
            <div className="item-data p-4">
                <h2 className="item-name mb-4">{props.productData.name}</h2>
                <h3 className="item-price">${props.productData.unitPrice !== undefined ? props.productData.unitPrice.toFixed(2) : ""}</h3>
                
                < hr />

                <div className="mb-4 item-data-block">
                    <h4>Quantity</h4>
                    <div className="item-quantity-container">
                        <input onClick={e => onQuantityUpdate(e, -1)} type="image" alt="minus" src={minusSign} className="quantity-btn unhover"/>
                        <p className="item-quantity-num unhover">{quantity}</p>
                        <input onClick={e => onQuantityUpdate(e, 1)} type="image" alt="plus" src={plusSign} className="quantity-btn unhover" />
                    </div>
                </div>

                <div className="mb-4 item-data-block">
                    <h4>Select Size</h4>
                    <div className="item-select-size-container">

                        {props.productData.availableSizes === undefined ? "" : 
                            (props.productData.availableSizes.split(',').map((e, i) =>
                            <div key={i} className="size-box-container"><div onClick={event => onSizeSelect(event, e, i)} type="button" className={"size-box box-0" + i}><p className="size-box-text unhover">{e}</p></div></div>
                        ))}
                    </div>
                </div>

                <Button onClick={handleSave} type="button" className=" addCart-btn col-12 mb-4"><h4 className="add-to-cart-btn-text">{props.btnText}</h4></Button>
                
                <div>
                    <p className="item-desc">{props.productData.description}</p>

                    <p className="item-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p><p className="item-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p><p className="item-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p><p className="item-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

            </div>

        </div>
    );
}

export default Item;