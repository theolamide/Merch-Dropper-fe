import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router";
import {useSelector, useDispatch} from "react-redux";
import styled from 'styled-components';
import {TextField, Button} from "@material-ui/core";
import { useStyles } from "../Component-Styles/addProduct-styles.js";
import {addAddress, getQuote, setQuote} from "../../store/actions"
import {initialQuoteState} from "../../store/reducers/QuoteReducer"

const ShippingAddress = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const [address, setAddress] = useState(initialQuoteState.sendQuote.spInfo.address) 
    const sendQuote = useSelector(state => state.QuoteReducer.sendQuote)
   console.log(sendQuote, "send")


    const handleChange = e => {
        setAddress({
            ...address,
              [e.target.name]: e.target.value
              })
            }
      
    const handleSubmit = async (e)  => {
      const domain_name = localStorage.getItem("domain_name")
        e.preventDefault();
        await dispatch(addAddress(address))
          dispatch(getQuote(sendQuote))
          history.push(`/${domain_name}/checkout`)       
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
          
          {/* <TextField
            className={classes.addressField}
            id="outlined-basic"
            label="Country"
            name="country"
            variant="outlined"
            inputProps={{ maxLength: 5 }}
            value={address.country}
            onChange={handleChange}
          /> */}
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