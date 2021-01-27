import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ click }) => {
    return (
        <nav className='navbar'>
            {/* logo*/}
            <div className='navbar__logo'>
                <h2>Retro Game Store</h2>
            </div>
            {/* links */}
            <ul className='navbar__links'>
                <li>
                    <Link to='/cart' className='cart__link'>
                        <i className='fas fa-shopping-cart'></i>
                        <span>
                            Cart
                            <span className='cartLogo__badge'>0</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>Shop</Link>
                </li>
            </ul>

            {/* hamburger menu*/}
            <div onClick={click} className='hamburger__menu'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
};

export default Navbar;
