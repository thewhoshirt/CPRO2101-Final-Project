import styled from "styled-components";
export const BodyContainer = styled.div`
    text-align: center;
    background-color: #FCFAF2;
    position: relative;
`;
export const FormBody = styled.div`
    text-align: center;
    width: 90%;
    margin: 0 auto;
    background-color: #eff5f2;
`
export const Input = styled.input`
    border: 1px solid black;
    border-radius: 4px;
    width: 80%;
    height: 50px;
    margin-bottom: 20px;
    &:focus{
        outline: 2px solid #B275BB;
    }
`
export const TextArea = styled.textarea`
    border: 1px solid black;
    border-radius: 4px;
    width: 80%;
    height: 90px;
    margin-bottom: 20px;
    &:focus{
        outline: 2px solid #B275BB;
    }
`
export const BooyahLogo = styled.img`
    width: 35%;
`
export const List = styled.ul`
    text-align: left;
    
`
export const ListItems = styled.li`
    margin-bottom: 5px;
    margin-left: 3%;
    margin-right: 3%;
    
`
export const Headers = styled.h1`
    text-align: left;
    margin-left: 10%;
`
export const Selector = styled.select`
    margin-right: 58%;
    width: 22%;
`