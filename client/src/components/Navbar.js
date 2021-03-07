import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useSelector } from 'react-redux';
import Logo from '../components/Images/RGS_logo.png';
const Navbar = ({ click }) => {
    const cart = useSelector((state) => state.cart);

    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
    };
    return (
        <nav className='navbar'>
            {/* logo*/}
            <div className='navbar__logo'>
                <Link to='/'>
                    {' '}
                    <img src={Logo} alt='Retro Game Store' />
                </Link>
            </div>
            {/* links */}
            <ul className='navbar__links'>
                <li>
                    <Link to='/cart' className='cart__link'>
                        <i className='fas fa-shopping-cart'></i>
                        <span>
                            Cart
                            <span className='cartLogo__badge'>
                                {getCartCount()}
                            </span>
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
