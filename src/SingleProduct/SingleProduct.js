import React from "react";
import { useParams } from 'react-router-dom'
import PRODUCTS from '../APP/PRODUCTS.json'
import Image from '../Image/image'

const SingleProduct = (props) => {
    const { id } = useParams()
    const product = PRODUCTS.find(item => item.id === id)
    console.log("product", product);
    return (
        <div>
            <h2>{product.name}</h2>
            <Image imageSrc={product.image} />
        </div>
    );
};

export default SingleProduct;
