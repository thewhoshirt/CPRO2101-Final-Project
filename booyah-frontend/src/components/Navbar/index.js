import React, { useState } from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    MobileMenu,
} from "../../styles/NavbarElements";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeBurgerMenu = () => setClick(false);

    return (
        <>
            <Nav>
                {/* burger icon toggles the mobile menu */}
                <Bars onClick={handleClick} />

                {/* Desktop menu (kept as-is) */}
                <NavMenu>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/menu">Menu</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/pre-order">Pre-Order</NavLink>
                </NavMenu>

                {/* Secondary mobile menu — visible when `click` is true */}
                <MobileMenu className={click ? "active" : ""} onClick={closeBurgerMenu}>
                    <NavLink to="/" onClick={closeBurgerMenu}>
                        Home
                    </NavLink>
                    <NavLink to="/about" onClick={closeBurgerMenu}>
                        About Us
                    </NavLink>
                    <NavLink to="/menu" onClick={closeBurgerMenu}>
                        Menu
                    </NavLink>
                    <NavLink to="/contact" onClick={closeBurgerMenu}>
                        Contact
                    </NavLink>
                    <NavLink to="/pre-order" onClick={closeBurgerMenu}>
                        Pre-Order
                    </NavLink>
                </MobileMenu>
            </Nav>
        </>
    );
};

export default Navbar;