import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {axiosWithAuth} from "../../utils/axiosWithAuth";

const ShippingAddress = () => {
    const address = useSelector(state => state.QuoteReducer.sendQuote.spInfo.address);
    console.log(address, "address")

    return(
        <div>
            Hi
        </div>
    )


    
}
export default ShippingAddress;