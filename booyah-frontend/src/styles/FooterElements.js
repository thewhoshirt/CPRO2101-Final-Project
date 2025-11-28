import styled from 'styled-components';

export const FooterContainer = styled.div`
    top: 0;
    height: 150px;
    background-color: #FFEBEB;
    text-align: center;
    align-items: center;
    justify-content: space-evenly;
    display: flex;

    @media (max-width: 768px) {
    
        display: block;
        height: fit-content;
        padding-bottom: 10px;
    }
`;

export const Logo = styled.img`
    height: 100px;

    @media (max-width: 768px) {
        margin-top: 10px;
    }
`;

export const SocialLogos = styled.img`
    width: 10%;
    margin-right: 5px;
`;