import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {axiosWithAuth} from "../../utils/axiosWithAuth";

const ShippingAddress = () => {
    const [address, setAddress] = useState(useSelector(state => state));
    console.log(address)

    return(
        null
    )


    
}
export default ShippingAddress;