import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import styled from 'styled-components';
import {TextField, Button} from "@material-ui/core";
import { useStyles } from "../Component-Styles/addProduct-styles.js";
import {addAddress} from "../../store/actions"

const ShippingAddress = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [address, setAddress] = useState(useSelector(state => state.QuoteReducer.sendQuote.spInfo.address));
    console.log(address, "address")

    const handleChange = e => {
        setAddress({
            ...address,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addAddress(address))
    }


    return(
       <AddressPageWrapper>
           <h3>Please Enter Shipping Address</h3>
           <TextField
            className={classes.addressField}
            id="outlined-basic"
            label="Name"
            name="name"
            variant="outlined"
            inputProps={{ maxLength: 25 }}
            value={address.name}
            onChange={handleChange}
          />
          <TextField
            className={classes.addressField}
            id="outlined-basic"
            label="Shipping Address"
            name="address1"
            variant="outlined"
            value={address.address1}
            onChange={handleChange}
          />
          
          <TextField
            className={classes.addressField}
            id="outlined-basic"
            label="City"
            name="city"
            variant="outlined"
            inputProps={{ maxLength: 25 }}
            value={address.city}
            onChange={handleChange}
          />
          <TextField
            className={classes.addressField}
            id="outlined-basic"
            label="State"
            name="state"
            variant="outlined"
            inputProps={{ maxLength: 25 }}
            value={address.state}
            onChange={handleChange}
          />
          <TextField
            className={classes.addressField}
            id="outlined-basic"
            label="Zip"
            name="zip"
            variant="outlined"
            inputProps={{ maxLength: 5 }}
            value={address.zip}
            onChange={handleChange}
          />
          
          <TextField
            className={classes.addressField}
            id="outlined-basic"
            label="Country"
            name="country"
            variant="outlined"
            inputProps={{ maxLength: 5 }}
            value={address.country}
            onChange={handleChange}
          />
          <Button onClick={handleSubmit}>Submit</Button>
       </AddressPageWrapper>
    )


    
}
export default ShippingAddress;

const AddressPageWrapper = styled.div`
    width: 75%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    margin: 50px auto 0;
    @media (max-width: 600px) {
            font-size: 0.75rem;
            width: 80%;
        }
`