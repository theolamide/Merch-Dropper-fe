import React, { useState, useEffect } from 'react';
import history from '../../utils/history';
import axios from 'axios';
import {SettingsH2, SettingsBox, StripeH3, StripeStatusTitle, StripeStatus, SettingsContainer, StorefrontH3,
         AccountTitle, AccountNumber, Divider, StorefrontStatusTitle, StorefrontStatusConainer,
        StorefrontStatusDot, StorefrontStatus, StorefrontTitle, StorefrontName, StripeContainer,
        StripeStatusContainer, AccountContainer, StorefrontContainer, StorefrontStatusInner, StorefrontNameContainer } from './Styled';



const Settings = () => {

    const profile = JSON.parse(localStorage.getItem("profile"));
    const [stripe,setStripe] = useState('');
    const [store,setStore] = useState('');
    let parser = new URL(window.location.href);
    const domain = parser.pathname.split('/')[1];
    
    console.log(domain)

    axios
    .get(`/api/stripe/${profile.email}`)
    .then((res) => {
        console.log(res.data.user.stripe_account)
        if(res.data.user.stripe_account){setStripe(res.data.user.stripe_account);}
       });
    
    axios
    .get(`/api/stores/domain/${domain}`)
    .then((res) => {
        console.log('Store res ',res)
        if(res.data.store_name){setStore(res.data.store_name)}
        
    });

    return (
        <SettingsContainer>
            <SettingsH2>Settings</SettingsH2>
            <SettingsBox>
                <StripeContainer>
                    <StripeH3>Stripe</StripeH3>
                    <StripeStatusContainer>
                        <StripeStatusTitle>Status:</StripeStatusTitle>
                        <StripeStatus>Connected</StripeStatus>
                    </StripeStatusContainer>
                    <AccountContainer>
                        <AccountTitle>Account Number:</AccountTitle>
                        <AccountNumber>{stripe}</AccountNumber>
                    </AccountContainer>
                </StripeContainer>

                <Divider/>

                <StorefrontContainer>
                    <StorefrontH3>Storefront</StorefrontH3>
                    <StorefrontStatusConainer>
                        <StorefrontStatusTitle>Status:</StorefrontStatusTitle>
                        <StorefrontStatusInner>
                            <StorefrontStatusDot/>
                            <StorefrontStatus>Online</StorefrontStatus>
                        </StorefrontStatusInner>
                    </StorefrontStatusConainer>
                    <StorefrontNameContainer>
                        <StorefrontTitle>Store Name:</StorefrontTitle>
                        <StorefrontName>{store}</StorefrontName>
                    </StorefrontNameContainer> 
                </StorefrontContainer>
            </SettingsBox>
        </SettingsContainer>
    )
}

export default Settings;