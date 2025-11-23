import React from "react";
import{
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from "./NavbarElements";

const Navbar = () => {
    <>
        <Nav>
            <Bars />
                <NavMenu>
                    <NavLink to="/contact">Contact</NavLink>    
                </NavMenu>            
        </Nav>
    </>
}

export default Navbar;