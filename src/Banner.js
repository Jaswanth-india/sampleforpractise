import React from 'react';

function Banner (props){
    
    return (
        <div style={props.style}>
            Hello {props.bannerData && props.bannerData.countryFlag} Hey! It looks like you are from <b>{props.bannerData && props.bannerData.country}</b>. We support Parity Purchasing Power, so if you need it, use code <b>“{props.bannerData && props.bannerData.couponCode}”</b> to get <b>{props.bannerData && props.bannerData.discountPercentage}%</b> off your subscription at checkout.
        </div>
    )
}

export default Banner;