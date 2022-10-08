import React, { useState } from 'react';
import './Item.css'
import plusSign from '../../Content/Icons/round-plus.svg';
import minusSign from '../../Content/Icons/round-minus.svg';
import { Button } from 'react-bootstrap';
import skye from "../../Content/Images/SkyeGoggles.jpeg";

function Item(props)
{
    const[quantity, setQuantity] = useState(1);
    /* const[sizeSelected, setSizeSelected] = useState(""); */

    function onQuantityUpdate(event, amount){
        const newQty = quantity + amount <= 1 ? 1 : quantity + amount;
        setQuantity(newQty);
    }

    function onSizeSelect(event, newSize, boxNum){
        /* setSizeSelected(newSize); */

        let allSizeBoxes = document.getElementsByClassName("size-box");
        
        for(let i = 0; i < allSizeBoxes.length; i++)
        {
            if(i === boxNum)
                allSizeBoxes[i].classList.add("size-box-selected");
            else
                allSizeBoxes[i].classList.remove("size-box-selected");
        }
    }

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
                        <img src={skye} 
                        alt="skye"/>
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
                <h2 className="item-name mb-4">Skye Goggles</h2>
                <h3 className="item-price">$10.00</h3>
                
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
                        <div className="size-box-container"><div onClick={e => onSizeSelect(e, "XS", 0)} type="button" className="size-box box-0"><p className="size-box-text unhover">XS</p></div></div>
                        <div className="size-box-container"><div onClick={e => onSizeSelect(e, "S", 1)} type="button" className="size-box box-1"><p className="size-box-text unhover">S</p></div></div>
                        <div className="size-box-container"><div onClick={e => onSizeSelect(e, "M", 2)} type="button" className="size-box box-2"><p className="size-box-text unhover">M</p></div></div>
                        <div className="size-box-container"><div onClick={e => onSizeSelect(e, "XL", 3)} type="button" className="size-box box-3"><p className="size-box-text unhover">XL</p></div></div>
                    </div>
                </div>

                <Button type="button" className=" addCart-btn col-12 mb-4"><h4 className="add-to-cart-btn-text">{props.btnText}</h4></Button>
                
                <div>
                    <p className="item-desc">Can see bitchesss from a mile away</p>
                    <p className="item-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
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