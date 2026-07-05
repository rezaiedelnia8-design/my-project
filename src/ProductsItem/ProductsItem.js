import React, { useContext, useEffect, useRef } from 'react'
import Button from './../Button/Button'
import Image from '../Image/image';
import './ProductItem.css';
import ThemeContext from '../Contexts/ThemeContext'
import CartContext from '../Contexts/CartContext'
import { MdShoppingCart } from "react-icons/md";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import {Link} from 'react-router-dom'




const ProductItem = ({data}) => {
const themeValues = useContext(ThemeContext);
const {carts ,dispatchCart } = useContext(CartContext);
const productItemRef = useRef(null)
const added = carts.includes(data.id)

const handleAdd = () => {
 if (added) {
  dispatchCart({
    type: "REMOVE_FROM_CART",
    id: data.id
  })
 } else {
  dispatchCart({
    type: "ADD_TO_CART",
    id: data.id
  });
 }
}

useEffect(() => {
  if (productItemRef.current) {
    productItemRef.current.classList.add('visible');
  }
}, []);
  return (
    <li className='ProductItem' ref={productItemRef}>
      <Link to={`/product/${data.id}`}>
      <h3>{data.name}</h3>
      </Link>
      <Image imageSrc={data.image} />
      <span>Price: {data.price}</span>
      <Button
      handleClick={handleAdd}
      style={{
        color: themeValues.theme.color,
        borderColor: themeValues.theme.color,
       display: "flex",
       alignItems: "center",
       justifyContent: "center",
       fontFamily: 'Roboto',
    fontSize: '20px',

      }}
      >
       {added ? (
  <>
    <IoIosRemoveCircleOutline />
    Remove from Cart
  </>
) : (
  <>
    <MdShoppingCart />
    Add to Cart
  </>
)}
      </Button>
    </li>

  );
};

export default ProductItem
