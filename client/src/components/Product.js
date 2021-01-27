import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div className='product'>
            <img
                src='https://images.unsplash.com/photo-1591462391994-cb7614f54aff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
                alt='Nintendo Entertainment System'
            />
            <div className='product__info'>
                <p className='info__name'>Nintendo Entertainment System</p>
                <p className='info__description'>
                    The Nintendo Entertainment System (NES) is an 8-bit
                    third-generation home video game console produced by
                    Nintendo. Nintendo first released it in Japan as the Family
                    Computer,[a] commonly known as the Famicom,[b] in 1983. The
                    NES, a remodelled version, was released internationally in
                    the following years.
                </p>
                <p className='info__price'>$122.99</p>
                <Link to={`/product/${111}`} className='info__button'>
                    View
                </Link>
            </div>
        </div>
    );
};

export default Product;
