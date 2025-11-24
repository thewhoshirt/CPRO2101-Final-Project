import React from "react";
import{
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from "../../styles/NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                    <NavMenu>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/about'>About Us</NavLink>
                        <NavLink to='/menu'>Menu</NavLink>
                        <NavLink to="/contact">Contact</NavLink> 
                        <NavLink to='/pre-order'>Pre-Order</NavLink>
                           
                    </NavMenu>            
            </Nav>
        </>
    )
}

export default Navbar;