import React, { useState, useEffect } from 'react';
import ProductItem from '../ProductsItem/ProductsItem';
import CircularProgress from '@mui/material/CircularProgress';

const Products = ({ data = [] }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <ul className="products">
      {data.map((item) => (
        <ProductItem
          key={item.id}
          data={item}
        />
      ))}
    </ul>
  );
};

export default Products;
