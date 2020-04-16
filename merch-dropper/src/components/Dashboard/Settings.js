import React, { useState, useEffect } from 'react';
import history from '../../utils/history';
import axios from 'axios';
import {SettingsH2, SettingsBox, StripeH3, StripeStatusTitle, StripeStatus, SettingsContainer, StorefrontH3,
         AccountTitle, AccountNumber, Divider, StorefrontStatusTitle, StorefrontStatusConainer,
        StorefrontStatusDot, StorefrontStatus, StorefrontTitle, StorefrontName, StripeContainer,
        StripeStatusContainer, AccountContainer, StorefrontContainer, StorefrontStatusInner, StorefrontNameContainer } from './Styled';



const Settings = () => {

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
                        <AccountNumber>123456789</AccountNumber>
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
                        <StorefrontName>The Merch Man</StorefrontName>
                    </StorefrontNameContainer> 
                </StorefrontContainer>
            </SettingsBox>
        </SettingsContainer>
    )
}

export default Settings;