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
    return (
        <>
            <Nav>
                <Bars />
                    <NavMenu>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to="/contact">Contact</NavLink>    
                    </NavMenu>            
            </Nav>
        </>
    )
}

export default Navbar;