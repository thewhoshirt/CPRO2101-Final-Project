import styled from "styled-components";

export const BodyContainer = styled.div`
    text-align: center;
    background-color: #FCFAF2;
    position: relative;
    width: fit-content;
`;

export const BooyahLogo = styled.img`
    width: 20%;

    @media (max-width: 768px) {
        width: 80%;
        margin-bottom: 5%;
    }
`;

export const Heading = styled.div`
    display: flex;
    justify-content: space-evenly;
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
`;

export const PinkHeading = styled.h2`
    color: #FF5FBE;
    padding: 10px;
`;

export const BlueHeading = styled.h3`
    color: #0057E2;
    padding: 10px;
`;

export const PinkText = styled.p`
    color: #FF5FBE;
`;


export const IntroText = styled.div`
    background-color: #C9F2DE;
    padding: 2%;
    border: solid black 2px;
`;

export const Image = styled.img`
    width: 50%;
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

    @media (max-width: 768px) {
        display: block;
    }
`;

export const AboutPillars = styled.div`
    padding: 5%;
    border: solid black 2px;
`;

export const AboutPurpose = styled.div`
    padding: 5%;
    border: solid black 2px;
`;


