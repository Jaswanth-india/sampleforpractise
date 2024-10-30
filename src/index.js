import React, { useState,useEffect } from 'react';
import Banner from "./Banner.js";

const Main = (props) => {
    let [bannerData,setBannerData]=useState(props.bannerData);
    let [style,setStyle]=useState(props.customStyle);
    
    if(!props.bannerData){
        useEffect(()=>{
            fetch("https://api.paritydeals.com/api/v1/deals/discount/?pd_identifier="+props.pdIdentifier)
            .then((res)=>res.json())
            .then((res)=>{
                setBannerData(res);
                props.customStyle?null:(setStyle(res.bar));
                props.dataToParent(res);
            })
        },[])
    }

    return (
        (props.bannerData)?(
            <div style={style}>
                Hello {props.bannerData.countryFlag} Hey! It looks like you are from <b>{props.bannerData.country}</b>. We support Parity Purchasing Power, so if you need it, use code <b>“{props.bannerData.couponCode}”</b> to get <b>{props.bannerData.discountPercentage}%</b> off your subscription at checkout.
            </div>
        ):(
        <Banner bannerData={bannerData} style={style}/>)
    );
};

export default Main;