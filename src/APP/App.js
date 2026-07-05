import React, { useState } from 'react';
import './App.css';
import Products from '../Products/Products';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Layout from '../Layout/Layout';
import PRODUCTS from './PRODUCTS.json';
import ThemeContext from '../Contexts/ThemeContext';
import themeConfig from '../configs/thems';
import Timer from '../Timer/Timer';
import Slider from '../Slider/Slider';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import SingleProduct from '../SingleProduct/SingleProduct';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  const [activeTheme, setActiveTheme] = useState('green');

  return (
    <ThemeContext.Provider
      value={{
        theme: themeConfig[activeTheme],
        setActiveTheme,
      }}
    >
      <div className='App'>
        <BrowserRouter>
          <Layout>
            <Routes>

              
              <Route
  path="/"
  element={
    <>
      <Slider />
      <Timer />
      <Products data={PRODUCTS} />
    </>
  }
/>

              <Route
                path="/about"
                element={<About />}
              />

              <Route
                path="/contact"
                element={<Contact />}
              />

              <Route
                path="/blog"
                element={<Blog />}
              />

              <Route
                path="/product/:id"
                element={<SingleProduct />}
              />
            </Routes>
          </Layout>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
