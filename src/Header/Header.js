import React, { useContext } from 'react';
import './Header.css';
import NavBar from './../Navbar/Navbar';
import { useLocation } from 'react-router-dom';
import CartContext from '../Contexts/CartContext';
import { MdShoppingCart } from "react-icons/md";

const Header = () => {
    let { pathname } = useLocation();
    let title = '';
    const { carts } = useContext(CartContext);

    if (pathname === '/') title='Shop';
    if (pathname === '/about') title='About;'
    if (pathname === '/blog') title='Blog';
    if (pathname === '/contact') title='Contact';
    if (pathname.includes ('product')) title= 'Shop';

    return (
        <div className="Header">
        <div className="TopBar">
            <NavBar />
            <div className='Cart'>
      <MdShoppingCart />
      <h4>{carts.length}</h4>
      
      </div>
        </div>
        <h3>{title}</h3>
        </div>
    );
};

export default Header;
