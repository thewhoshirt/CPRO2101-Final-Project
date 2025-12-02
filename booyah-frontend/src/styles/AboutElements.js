import styled from "styled-components";

export const BodyContainer = styled.div`
    text-align: center;
    background-color: #FCFAF2;
    position: relative;
    width: fit-content;
`;

export const BooyahLogo = styled.img`
    width: 20%;
    margin: 5;

    @media (max-width: 768px) {
        margin-bottom: 5%;
        max-width 100%;
        
    }
`;

export const Heading = styled.div`
    display: flex;
    // justify-content: space-evenly;
    align-items: center;
    width: 90%;
    padding: 5%;

    @media (max-width: 768px) {
        display: block;
    }
`;

export const HeadingText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size:
`;

export const PinkHeading = styled.h2`
    color: #FF5FBE;
    padding: 10px;
`;

export const BlueHeading = styled.h3`
    color: #0057E2;
    padding: 10px;
`;

export const AccentText = styled.p`
    color: #CB85F9;
    font-weight: bold;
`;


export const IntroText = styled.div`
    background-color: #F9E44E;
    padding: 2%;
    border: solid black 2px;
    margin-bottom:1%;
`;

export const Image = styled.img`
    width: 50%;
    max-hight: 100%
    height: 100%;
    border: solid black 2px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const PillarsDiv = styled.div`
    height: fit-content;
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
        display: block;
    }
`;

export const PurposeDiv = styled.div`
    height: fit-content;
    display: flex;
    justify-content: center;
    background-color: #FFEBEB;

    

    @media (max-width: 768px) {
        display: block;
        margin-bottom: 1%;
    }
`;

export const AboutPillars = styled.div`
    padding: 5%;
    border: solid black 2px;
    background-color: #C9F2DE;
     @media (max-width: 768px) {
        display: block;
        margin-bottom: 1%;
    }
`;

export const AboutPurpose = styled.div`
    padding: 5%;
    border: solid black 2px;
`;


