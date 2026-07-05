import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';


const Button = ({ children, handleClick, style }) => (
  <button
    className='button'
    onClick={handleClick}
    style={style}
  >
    {children}
  </button>
);
export default Button;
