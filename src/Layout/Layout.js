import React, { useContext, useReducer } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CartContext from '../Contexts/CartContext'
import CartReducer from '../reducer/Cart'
import './Layout.css'


const Layout = ({children}) => {
   const carts = JSON.parse(localStorage.getItem('carts')) || [];

const [state, dispatch] = useReducer(CartReducer, {
    carts,
});
    return (
        <CartContext.Provider
        value={{
            carts:state.carts,
            dispatchCart:dispatch,
        }}
        >
              <div className='Layout'>
                <Header />
                {children}
                <Footer />
              </div>
              </CartContext.Provider>
    );
};

export default Layout
