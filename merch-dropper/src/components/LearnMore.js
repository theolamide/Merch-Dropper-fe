import React from 'react';
import styled from 'styled-components';
import BoardRoom from '../images/BoardRoom.jpg';
import OurTeam from '../images/OurTeam.jpg';

const PageWrapper = styled.div`
    width:100%
`
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
            height: 70vh;
        }
`
const TeamHeaderImage = styled.div`
    margin: 0 auto;
    width: 80%;
    height: 70vh;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${OurTeam});
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
            height: 50vh;
        }
        @media (max-width: 360px) {
            justify-content: space-between;
            height: 100vh;
        }
`
const TextWrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    // border: 1px solid white;
        @media (max-width: 768px) {
            margin-bottom: 1rem;
        }
`
const TopHeaderText = styled.h2`
    color: #217fff;
    font-size: 5rem;
    text-align:center;
        @media (max-width: 768px) {
            font-size: 4rem;
            margin: 0.5rem;
        }
        @media (max-width: 360px) {
            font-size: 3rem;
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
            font-size: 1.5rem;
            font-weight: normal;
        }

        @media (max-width: 360px) {
            font-size: 1rem;
            font-weight: normal;
        }
`
const ObjectiveWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 3rem auto;
`
const ObjectiveDiv = styled.div`
        width: 40%;
        border-radius: 1rem;
        height: 30rem;
        background: #FF8A00;
            @media (max-width: 768px) {
                width: 80%;
                margin-top: 1rem;
            }
`
const ObjectiveHeaderText = styled.h2`
    color: #217fff;
    font-size: 2rem;
    text-align:center;
        @media (max-width: 768px) {
            font-size: 2rem
            margin: 0.5rem;
        }
`
const ObjectiveText = styled.p`
    margin: 0 auto;
    width: 90%;
    text-align: left;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 1rem;
    //border: 1px solid white;
        @media (max-width: 768px) {
            font-size: 1rem
        }
        @media (max-width: 360px) {
            font-size: 0.9rem;
        }
`
const CardsWrapper = styled.div`
    margin: 0 auto;
    width: 80%;
    padding-top: 3rem;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    @media (max-width: 768px) {
            width: 100%;
        }
`
const IndividualCard = styled.div`
    margin: 2rem auto;
    width: 15rem;
    height: 25rem;
    background-color: #EAD0C5;
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;

        @media (max-width: 768px) {
            width: 20rem;
            height: 30rem;
            margin: 1rem auto;
        }
        @media (max-width: 320px) {
            width: 17rem;
            height: 28rem;
            margin: 1rem auto;
        }
`
const PersonImage = styled.img`
    margin: auto;
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
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
const SocialWrapper = styled.div`
    display:flex;
    justify-content: space-around;
    margin: 1rem 0;
`
const SocialLink = styled.a`
    cursor: pointer;
    width: 2rem;
`



const LearnMore = () => {

    return (
        <PageWrapper>
            <TopImage>
                <TextWrapper>
                    <TopHeaderText>ABOUT MERCH DROPPER</TopHeaderText>

                    <TopParaText> It's the fastest way to set up a hassle free merch shop. Platform to upload designs and create products that plug into scalablepress.com to create a drop-shipping online shop. </TopParaText>
                </TextWrapper>
            </TopImage>

            <ObjectiveWrapper>
                <ObjectiveDiv>
                    <ObjectiveHeaderText style={{ margin: '1rem 0', textAlign: 'center' }}>THE PROBLEM</ObjectiveHeaderText>
                    <ObjectiveText>
                        <li>Expensive upfront costs for small entities</li>
                        <li>Information overload when reseraching where to source merchandise</li>
                        <li>Non user friendly merchandising websites</li>
                        <li>Difficulties of managing inventory systems</li>
                    </ObjectiveText>

                    <ObjectiveHeaderText style={{ margin: '1rem 0', textAlign: 'center' }}>OUR SOLUTION</ObjectiveHeaderText>
                    <ObjectiveText>
                        <li>You don't carry any inventory. That's on us and our partners.</li>
                        <li>One stop shop on all things you need for creating merch for your store.</li>
                        <li>User friendly and intuitive UI.</li>
                    </ObjectiveText>
                </ObjectiveDiv>

                <ObjectiveDiv style={{ height: '18rem' }} >
                    <ObjectiveHeaderText style={{ margin: '1rem 0', textAlign: 'center' }}>OUR MISSION</ObjectiveHeaderText>
                    <ObjectiveText>Enable anyone to set up a custom swag shop effortlessly on their own domain. To save early entrepreneurs the headache, time and money sinkhole that early days swag can be. And to quench the desire to have swag of every early company starter without actually requiring more than a small monthly expense.</ObjectiveText>
                </ObjectiveDiv>
            </ObjectiveWrapper>

            <TeamHeaderImage>
                <TopHeaderText style={{ margin: 'auto', color: '#FF8A00' }}>MEET OUR TEAM</TopHeaderText>
            </TeamHeaderImage>

            <CardsWrapper>
                <IndividualCard>
                    <PersonImage src={'https://media-exp1.licdn.com/dms/image/C5603AQEMam4iJFvQfw/profile-displayphoto-shrink_200_200/0?e=1588204800&v=beta&t=3Eib0IgBj9fK5A20aLJw06XGNTFex6zJD36e-mcMhWM'}></PersonImage>
                    <TextBodyWrapper>
                        <h3 style={{ margin: '1rem 0', textAlign: 'center' }}>Alan Fischbach</h3>

                        <h4 style={{ margin: '1rem 0', textAlign: 'center' }}>
                            UI/UX Designer
                        </h4>
                        <SocialWrapper>
                            <SocialLink href={'https://www.linkedin.com/in/buzrocks/'} target="_blank">
                                <img style={{ width: '2rem' }} src={'https://camo.githubusercontent.com/29d14f310b62515d0c7bc80067d02e5a801bc2b5/68747470733a2f2f7374617469632e6c6963646e2e636f6d2f73632f682f616c326f397a727672753761716a3865317832727a73726361'} alt="LinkedIn Icon" />
                            </SocialLink>
                        </SocialWrapper>
                    </TextBodyWrapper>
                </IndividualCard>

                {/* Map through the other members of the team since thay all have github accounts */}
                {TeamMemberData.map(person => (
                    // <KeyDiv key={person.index}>
                    <IndividualCard>
                        <PersonImage src={person.imageSrc}></PersonImage>
                        <TextBodyWrapper>
                            <h3 style={{ margin: '1rem 0', textAlign: 'center' }}>{person.name}</h3>

                            <h4 style={{ margin: '1rem 0', textAlign: 'center' }}>
                                {person.Role}
                            </h4>
                            <SocialWrapper>
                                <SocialLink href={`${person.LinkedIn}`} target="_blank">
                                    <img style={{ width: '2rem' }} src={'https://camo.githubusercontent.com/29d14f310b62515d0c7bc80067d02e5a801bc2b5/68747470733a2f2f7374617469632e6c6963646e2e636f6d2f73632f682f616c326f397a727672753761716a3865317832727a73726361'} alt="LinkedIn Icon" />
                                </SocialLink>
                                <SocialLink href={`${person.Github}`} target="_blank">
                                    <img src={'https://github.com/favicon.ico'} alt="Github Icon" />
                                </SocialLink>
                            </SocialWrapper>
                        </TextBodyWrapper>
                    </IndividualCard>
                    // </KeyDiv>
                ))}
            </CardsWrapper>
        </PageWrapper>
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
        name: "Daniel Ajadi",
        imageSrc: "https://avatars3.githubusercontent.com/u/54829403?s=400&v=4",
        Role: "Full-Stack Developer",
        LinkedIn: "https://www.linkedin.com/in/daniel-ajadi-95b207197/",
        Github: "https://github.com/theolamide"
    },
    {
        index: 3,    //These should be incremental from the last interger
        name: "Jeris Manning",
        imageSrc: "https://avatars2.githubusercontent.com/u/49968389?s=400&v=4",
        Role: "Full-Stack Developer",
        LinkedIn: "https://www.linkedin.com/in/jerismanning/",
        Github: "https://github.com/jeris-manning"
    },
    {
        index: 4,    //These should be incremental from the last interger
        name: "Marcos Lira",
        imageSrc: "https://avatars2.githubusercontent.com/u/46974548?s=400&v=4",
        Role: "Full-Stack Developer",
        LinkedIn: "https://www.linkedin.com/in/marcos-lira-837490186/",
        Github: "https://github.com/Mlira02"
    },
    {
        index: 5,    //These should be incremental from the last interger
        name: "Tristan Boudreau",
        imageSrc: "https://avatars0.githubusercontent.com/u/54781883?s=400&v=4",
        Role: "Full-Stack Developer",
        LinkedIn: "https://www.linkedin.com/in/tristan-boudreau-644b16168",
        Github: "https://github.com/tboudreau614"
    },
    {
        index: 6,    //These should be incremental from the last interger
        name: "Wes Jonke",
        imageSrc: "https://avatars3.githubusercontent.com/u/48270435?s=400&v=4",
        Role: "Full-Stack Developer",
        LinkedIn: "https://www.linkedin.com/in/wes-jonke/",
        Github: "https://github.com/Wjonke"
    },
    {
        index: 7,    //These should be incremental from the last interger
        name: "Preston Burton",
        imageSrc: "https://avatars1.githubusercontent.com/u/38443310?s=460&v=4",
        Role: "Team Lead",
        LinkedIn: "https://www.linkedin.com/in/prestonburton/",
        Github: "https://github.com/Oliver-Strange"
    }
]