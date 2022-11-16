import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import {Editor} from "@tinymce/tinymce-react";
import "./Item.css"

function ProductMaker(props)
{
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productDesc, setProductDesc] = useState("");
    const [itemType, setItemType] = useState("Treats");
    const [isAvailable, setAvailability] = useState(true);
    const [sizesSelected, setSizes] = useState("");
    const [imgs, setImgs] = useState([]);

    useEffect(() => {
        if(props.oldValues !== undefined)
        {
            const bodyImgs = [];
            console.log(props.oldValues.availableSizes.split(','))
            
            if(props.oldValues.images.length > 0)
            {

                for(let i = 0; i < props.oldValues.images.length; i++)
                {
                    bodyImgs.push(props.oldValues.images[i].imageSource);
                }
            }

            for(let i = 0; i < 5; i++)
            {
                const sizeElement = document.getElementById("size" + i);

                for(let j = 0; j < props.oldValues.availableSizes.length; j++)
                {
                    if(props.oldValues.availableSizes.split(',').includes(sizeElement.value))
                    {
                        sizeElement.setAttribute("checked", true);
                    }
                }
            }

            const itemTypes = document.getElementsByName("itemType");
        
            for(let i = 0; i < itemTypes.length; i++)
            {
                itemTypes[i].checked = itemTypes[i].value === props.oldValues.itemType;
            }

            setProductName(props.oldValues.name);
            setItemType(props.oldValues.productType);
            setProductDesc(props.oldValues.description);
            setProductPrice(props.oldValues.unitPrice);
            setAvailability(props.oldValues.isProductAvailable);
            setSizes(props.oldValues.availableSizes);
            setImgs(bodyImgs);

            console.log(props.oldValues.productType)

        }
    }, [props.oldValues])

    

    function handleSave(e)
    {
        const bodyImgs = [];

        for(let i = 0; i < imgs.length; i++)
        {
            bodyImgs.push({"imageSource": imgs[i]});
        }

        const body ={
            "name" : productName,
            "productType": itemType,
            "description": productDesc,
            "unitPrice": productPrice,
            "isProductAvailable": isAvailable,
            "availableSizes": sizesSelected,
            "images" : bodyImgs
        }

        props.handleAction(e, body);
    }

    function getSizesSelected()
    {
        console.log("Change")
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
        console.log(imgs)
    }

    return(
        <div className="item-component">
            <div id="demo" className="carousel slide item-carousel p-4" data-ride="carousel">

                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                </ul>

                <div className="carousel-inner active">
                    { (!imgs) 
                        ? <div></div> 
                        : imgs.map((e, i) => 
                            <div key={i} className={"carousel-item item-img card-img-top " + (i === 0 ? "active" : "")}>
                                <img src={e} alt={i}/>
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

                <div className="form-group">
                    <label htmlFor="productName">Product Name</label>
                    <input value={productName || ""} onChange={(e) => setProductName(e.target.value)} required type="text" className="form-control" id="productName" />
                </div>

                <div className="form-group">
                    <label htmlFor="productPrice">Product Price</label>
                    <input value={productPrice || ""} onChange={(e) => setProductPrice(e.target.value)} required type="number" min="0.00" step="0.01" className="form-control" id="productPrice" />
                </div>

                <div className="form-group">
                    <label htmlFor='itemType'>Select Item Type</label>
                    <select onChange={(e) => setItemType(e.target.value)} value={itemType} className='form-control' name="itemType" id="itemType">
                        <option value="Treats">Treats</option>
                        <option value="Accessories">Accessories</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="inputProductDesc">Description</label>
                    <Editor
                            id="inputProductDesc"
                            onEditorChange={(e) => setProductDesc(e)}
                            value={productDesc}
                            init={{
                                skin: true,
                                content_css: true,
                                menubar: true,
                                height: 200,
                                plugins: [
                                    'table'
                                ],
                                toolbar: 'undo redo | formatselect | ' +
                                'bold italic backcolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            }}
                        />
                </div>

                <div className="form-group">
                    <label htmlFor="productAvailability">Is Available?</label>
                    <input checked={isAvailable} value={isAvailable} onChange={(e) => setAvailability(e.target.checked)} type="checkbox" className="form-control" id="productAvailability" />
                </div>

                <form onClick={(e) => getSizesSelected()}>
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
                        <div className='m-4' key={i}>
                            <img style={{"height": "30px", "width": "30px"}} src={currentImage} alt={i} />
                            <button className='btn btn-danger ml-4' onClick={e => removeImage(e, i)}>Remove</button>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}

export default ProductMaker;