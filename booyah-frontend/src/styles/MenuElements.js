import styled from 'styled-components';

export const BodyContainer = styled.div`
    text-align: center;
    background-color: #FCFAF2;
`;

export const MenuHeading = styled.div`
    width: 50%;
    margin: 10%;

    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 0%;}
`;

export const Image = styled.img`
    width: 35%;

    @media screen and (max-width: 768px) {
        width: 80%;
        }
`;

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5%;
    margin-left: 3%;
    width: 90%;
    border: 2px solid #FF5FBE;

    @media screen and (max-width: 768px) {
        display: block;
        justify-content: center;
    }
`;

export const TextDiv = styled.div`
    margin: 0 15%;
`;

export const ProductHeading1 = styled.h3`
    color: #FF5FBE;
`;

export const ProductHeading2 = styled.h4`
    color:#1DCCBB;
`;