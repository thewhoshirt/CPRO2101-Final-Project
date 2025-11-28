import styled from "styled-components";
export const BodyContainer = styled.div`
    text-align: center;
    background-color: #FCFAF2;
    position: relative;
    padding-bottom: 20px;
    padding-top: 10px;
`;

export const Heading = styled.div`
    display: flex;
    justify-content: space-around;
    height:175px;

    @media screen and (max-width: 768px) {
        display: block;
        height: fit-content;
    }
`;

export const BooyahGraphic1 = styled.img`
    margin-top: 10px;
    height: 300px;
    width: 15%;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const BooyahGraphic2 = styled.img`
    margin-top: 80px;
    height: 220px;
    width: 15%;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const SocialLogos = styled.img`
    width: 5%;
    margin-right: 5px;
`;

export const HourHeaderMain = styled.div`
    color: #ff5fbe;
`;

export const HourHeaderSec = styled.div`
    color: black;
    background-color: #1dccbb;
    width: 25%;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        width: 50%;
    }
`;

export const Hours = styled.div`
    font-weight: bold;
`;

export const Separator = styled.div`
    color: #1dccbb;
    font-size: 30px;
`;

export const FormBody = styled.div`
    text-align: center;
    width: 90%;
    margin: 0 auto;
    background-color: #eff5f2;
`;

export const Input = styled.input`
    border: 1px solid black;
    border-radius: 4px;
    width: 80%;
    height: 50px;
    margin-bottom: 20px;
    &:focus{
        outline: 2px solid #B275BB;
    }
`;

export const TextArea = styled.textarea`
    border: 1px solid black;
    border-radius: 4px;
    width: 80%;
    height: 90px;
    margin-bottom: 20px;
    &:focus{
        outline: 2px solid #B275BB;
    }
`;

export const BooyahLogo = styled.img`
    width: 35%;
`;

export const Info = styled.div`
    display: flex;
    width: 80%;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        display: block;
        width: 100%;
        }
`;

export const Address = styled.p`
    color: #2057e2;
`;

export const InfoHours = styled.div`
    width: 50%;
    margin: 0 auto;
`;

export const InfoLoc = styled.div`
    width: 50%;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        width: 95%;}
`;

export const MapContainer = styled.div`
    height: 505px;
    width: 100%;
    border: 2px solid black;
    border-radius: 2px;
    margin: 0 auto;
`;