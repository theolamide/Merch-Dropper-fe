import React from 'react';
import styled from 'styled-components';
import BoardRoom from '../images/BoardRoom.jpg';

const TopImage = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 60vh;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${BoardRoom});
    background-size: cover;
    position: relative;
    display:-webkit-box;
    display:-webkit-flex;
    display:-ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    align-items: center;
    justify-content: flex-start;

        @media (max-width: 768px) {
            justify-content: space-between;
            height: 96vh;
        }
`
const TextWrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    // border: 1px solid white;
        @media (max-width: 768px) {
            height: 50%;
            margin-bottom: 5rem;
        }
`
const TopHeaderText = styled.h2`
    color: #217fff;
    font-size: 5rem;
    text-align:center;
        @media (max-width: 768px) {
            font-size: 2rem
            margin: 0.5rem;
        }
`

const TopParaText = styled.p`
    margin: 0 auto;
    width: 70%;
    text-align: center;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color:rgb(18,19,18);opacity:0.7;
    //border: 1px solid white;
        @media (max-width: 768px) {
            font-size: 1rem
        }
`

const ObjectiveWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: 3rem auto;
`

const ObjectiveDiv = styled.div`
        width: 40%;
        border-radius: 1rem;
        height: 50rem;
        background: #FF8A00;
`



const LearnMore = () => {


    return (
        <div>
            <TopImage>
                <TextWrapper>
                    <TopHeaderText>ABOUT MERCH DROPPER</TopHeaderText>

                    <TopParaText> It's the fastest way to set up a hassle free merch shop. Platform to upload designs and create products that plug into scalablepress.com to create a drop-shipping online shop. </TopParaText>
                </TextWrapper>
            </TopImage>

            <ObjectiveWrapper>
                <ObjectiveDiv>
                    <p>It's the fastest way to set up a hassle free merch shop. Platform to upload designs and create products that plug into scalablepress.com to create a drop-shipping online shop.</p>
                </ObjectiveDiv>

                <ObjectiveDiv>
                    <p>It's the fastest way to set up a hassle free merch shop. Platform to upload designs and create products that plug into scalablepress.com to create a drop-shipping online shop.</p>
                </ObjectiveDiv>
            </ObjectiveWrapper>



        </div>
    )
}

export default LearnMore;