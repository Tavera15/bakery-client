import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import "./Item.css"

function ProductMaker(props)
{
    const [productName, setProductName] = useState("");
    const [productDesc, setProductDesc] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [isAvailable, setAvailability] = useState(true);
    const [sizesSelected, setSizes] = useState();
    const [imgs, setImgs] = useState([]);


    function handleSave(e)
    {
        const bodyImgs = [];

        for(let i = 0; i < imgs.length; i++)
        {
            bodyImgs.push({"imageSource": imgs[i]});
        }

        const body ={
            "name" : productName,
            "description": productDesc,
            "unitPrice": productPrice,
            "isAvaliable": isAvailable,
            "availableSizes": sizesSelected,
            "images" : bodyImgs
        }

        props.handleAction(e, body);
    }

    function getSizesSelected()
    {
        var opts = document.getElementsByClassName("checkbox-opt")
        let res = "";
        setSizes("");
        
        for(let i = 0; i < opts.length; i++)
        {
            if(opts[i].checked)
            {
                res += opts[i].value + ",";
            }
        }

        if(res.length > 0)
        {
            res = res.substring(0, res.length-1);
        }

        setSizes(res)
    }

    function handleImgUpload(e)
    {
        const newImgs = e.target.files;
        
        for(let i = 0; i < newImgs.length; i++)
        {
            const newImg = newImgs[i];
            
            if(newImg !== undefined)
            {

                const reader = new FileReader();
                reader.readAsDataURL(newImg);
                
                reader.onload = function () {
                    // Convert img to bytes
                    const imgBytesRaw = JSON.stringify(reader.result)
                    const imgBytes = imgBytesRaw.substring(1, imgBytesRaw.length-1)
                    setImgs(curr => [...curr, imgBytes]);

                    console.log("chamce")
                }
            }
        }
    }

    function removeImage(e, i)
    {
        imgs.splice(i, 1)
        setImgs([...imgs]);
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
                    <input value={productName || ""} onChange={(e) => setProductName(e.target.value)} required type="text" className="form-control" id="productName" />
                </div>

                <div className="form-group">
                    <label htmlFor="productPrice">Product Price</label>
                    <input value={productPrice || ""} onChange={(e) => setProductPrice(e.target.value)} required type="number" min="0.00" step="0.01" className="form-control" id="productPrice" />
                </div>

                <div className="form-group">
                    <label htmlFor="productDescription">Description</label>
                    <input value={productDesc || ""} onChange={(e) => setProductDesc(e.target.value)} required className="form-control" id="productDescription" />
                </div>

                <div className="form-group">
                    <label htmlFor="productAvailability">Is Available?</label>
                    <input value={isAvailable} onChange={(e) => setAvailability(e.target.value)} type="checkbox" className="form-control" id="productAvailability" />
                </div>

                <form onChange={(e) => getSizesSelected()}>
                    <input className='checkbox-opt' type="checkbox" id="size0" name="size0" value="XS" />
                    <label htmlFor="size0">XS</label>
                    <br />
                    <input className='checkbox-opt' type="checkbox" id="size1" name="size1" value="S" />
                    <label htmlFor="size1">S</label>
                    <br />
                    <input className='checkbox-opt' type="checkbox" id="size2" name="size2" value="M" />
                    <label htmlFor="size2">M</label>
                    <br />
                    <input className='checkbox-opt' type="checkbox" id="size3" name="size3" value="L" />
                    <label htmlFor="size3">L</label>
                    <br />
                    <input className='checkbox-opt' type="checkbox" id="size4" name="size4" value="XL" />
                    <label htmlFor="size4">XL</label>
                </form>

                <input className='' onChange={e => handleImgUpload(e)} type="file" multiple accept='image/png' />

                < hr />

                <Button onClick={e => handleSave(e)} type="button" className="btn btn-dark col-12 mb-4"><h4 className="add-to-cart-btn-text">{props.btnText}</h4></Button>

                <div id='imgList'>
                    {imgs.map((currentImage, i) => 
                        <div>
                            <img src={currentImage} alt={i} />
                            <input type="button" onClick={e => removeImage(e, i)} />
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}

export default ProductMaker;