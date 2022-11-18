import React from "react";
import "./Banner.css";

function Banner(props)
{
    return(
        <div className="banner" style={{"backgroundImage": `url(${props.bannerImg})`}}>
            <div className="inner-banner">
                <h1 className="banner-title">{props.bannerTitle}</h1>
            </div>
        </div>
    )
}

export default Banner;