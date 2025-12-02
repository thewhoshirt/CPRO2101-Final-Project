import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

//nav bar 
export const Nav = styled.nav`
    background: #C9F2DE;
    height: 85px;
    display: flex;
    width: flex;
    justify-content: space-between;
    padding: 0.2rem;
    z-index: 2;
    position: sticky;
    top: 0;
`;
//links in nav bar
export const NavLink = styled(Link)`
    color: #808080;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #000000;
    }
`;
// burger menu lines 
export const Bars = styled(FaBars)`
    display: none;
    color: #0057E2;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    position: relative;
    @media screen and (max-width: 768px) {
        display: none; 
        /* desktop menu hidden on small screens */
    }
    
`;

/* Secondary mobile menu shown when burger is toggled */
export const MobileMenu = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        &.active {
            display: flex;
            flex-direction: column;
            width: 25%;
            position: absolute;
            top: 85px;
            right: 0;
            opacity: 1;
            transition: all 0.25s ease-in-out;
            background: #C9F2DE;
            padding: 1rem 0;
            align-items: center;
            gap: 0.5rem;
            z-index: 1;
        }
    }
`;

// export const NavBtn = styled.nav`
//     display: flex;
//     align-items: center;
//     margin-right: 24px;
//     @media screen and (max-width: 768px) {
//         display: none;
//     }
// `;

// export const NavBtnLink = styled(Link)`
//     border-radius: 4px;
//     background: #808080;
//     padding: 10px 22px;
//     color: #000000;
//     outline: none;
//     border: none;
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;
//     text-decoration: none;
//     margin-left: 24px;
//     &:hover {
//         transition: all 0.2s ease-in-out;
//         background: #fff;
//         color: #808080;
//     }
// `;

