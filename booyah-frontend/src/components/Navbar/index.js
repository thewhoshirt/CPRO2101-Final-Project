import React, {useState} from "react";
import{
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from "../../styles/NavbarElements";


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick= () => setClick(!click);
    const closeBurgerMenu = () => setClick(false);
    return (
        <>
            <Nav>
                <Bars onClick={handleClick}>
                    <NavMenu onClick={closeBurgerMenu} className={click? 'active' : ''}>
                        <NavLink to='/' onClick={closeBurgerMenu}>Home</NavLink>
                    </NavMenu>
                </Bars>
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