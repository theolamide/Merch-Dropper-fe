import React from 'react';
import { Link } from "react-router-dom";
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

const KeyDiv = styled.div`
    margin: 4rem 0;
        @media (max-width: 768px) {
            margin: 1rem auto;
        }
`
const IndividualCard = styled.div`
    margin: auto;
    width: 19rem;
    height: 35rem;
    background-color:white;
    // padding: 1rem;
    border: 0.15rem solid #d8aa35;
    border-radius: 1rem;
        @media (max-width: 320px) {
            width: 17rem;
            height: 38rem;
            margin: 1rem auto;
        }
`
const PersonImage = styled.img`
    margin: auto;
    border-radius: 0.8rem;
    width: 100%;
    // height: 14rem;
    @media(max - width: 320px) {
        margin: 0rem;
        width: 17rem;
        margin: 1rem auto;
    }
`

const TextBodyWrapper = styled.div`
    display:flex;
    flex-direction: column;
    // justify-content: space-between;
`
const SocialLink = styled(Link)`
    text-decoration: none; 
    color:white;
    &:hover {
        color:#d8aa35;
    }
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

            <div>
                {TeamMemberData.map(person => (
                    <KeyDiv key={person.index}>
                        <IndividualCard>
                            <PersonImage src={person.imageSrc}></PersonImage>
                            <TextBodyWrapper>

                                <h4 style={{ margin: '1rem 0', height: '3rem' }}>{person.name}</h4>

                                <p style={{ margin: '1rem 0' }}>
                                    {person.Role}
                                </p>
                                <SocialLink to={`${person.LinkedIn}`}>
                                    <img src={'https://camo.githubusercontent.com/29d14f310b62515d0c7bc80067d02e5a801bc2b5/68747470733a2f2f7374617469632e6c6963646e2e636f6d2f73632f682f616c326f397a727672753761716a3865317832727a73726361'} alt="LinkedIn Icon" />
                                </SocialLink>
                                <SocialLink to={`${person.Github}`}>
                                    <img src={'https://github.com/favicon.ico'} alt="Github Icon" />
                                </SocialLink>

                            </TextBodyWrapper>
                        </IndividualCard>
                    </KeyDiv>
                ))}
            </div>



        </div>
    )
}

export default LearnMore;

const TeamMemberData = [
    {
        index: 1,    //These should be incremental from the last interger
        name: "Jennie Van",
        imageSrc: "https://avatars3.githubusercontent.com/u/51731995?s=400&v=4",
        Role: "Full-Stack Developer",
        LinkedIn: "https://www.linkedin.com/in/jennievan/",
        Github: "https://github.com/yennilee"
    },
    {
        index: 2,    //These should be incremental from the last interger
        name: "Jennie Van",
        imageSrc: "https://avatars3.githubusercontent.com/u/51731995?s=400&v=4",
        Role: "Full-Stack Developer",
        LinkedIn: "https://www.linkedin.com/in/jennievan/",
        Github: "https://github.com/yennilee"
    },
    {
        index: 3,    //These should be incremental from the last interger
        name: "Jennie Van",
        imageSrc: "https://avatars3.githubusercontent.com/u/51731995?s=400&v=4",
        Role: "Full-Stack Developer",
        LinkedIn: "https://www.linkedin.com/in/jennievan/",
        Github: "https://github.com/yennilee"
    },
    {
        index: 4,    //These should be incremental from the last interger
        name: "Jennie Van",
        imageSrc: "https://avatars3.githubusercontent.com/u/51731995?s=400&v=4",
        Role: "Full-Stack Developer",
        LinkedIn: "https://www.linkedin.com/in/jennievan/",
        Github: "https://github.com/yennilee"
    },
    {
        index: 5,    //These should be incremental from the last interger
        name: "Jennie Van",
        imageSrc: "https://avatars3.githubusercontent.com/u/51731995?s=400&v=4",
        Role: "Full-Stack Developer",
        LinkedIn: "https://www.linkedin.com/in/jennievan/",
        Github: "https://github.com/yennilee"
    },
    {
        index: 6,    //These should be incremental from the last interger
        name: "Jennie Van",
        imageSrc: "https://avatars3.githubusercontent.com/u/51731995?s=400&v=4",
        Role: "Full-Stack Developer",
        LinkedIn: "https://www.linkedin.com/in/jennievan/",
        Github: "https://github.com/yennilee"
    }, {
        index: 7,    //These should be incremental from the last interger
        name: "Jennie Van",
        imageSrc: "https://avatars3.githubusercontent.com/u/51731995?s=400&v=4",
        Role: "Full-Stack Developer",
        LinkedIn: "https://www.linkedin.com/in/jennievan/",
        Github: "https://github.com/yennilee"
    }
]