import React from 'react';
import './Products.css';

const Products = ({singleProducts, handleAddToCart}) => {
    const {img, name, price, ratings, seller} = singleProducts
    return (
        <div className='single-item'>
            <img src={img} alt="" />
            <div className='internal-content'>
                <h3>{name}</h3>
                <h5>Price: ${price}</h5>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings} Stars</p>
            </div>
            <button onClick={()=>{handleAddToCart(singleProducts)}} className='add-to-cart'>Add to Cart</button>
        </div>
    );
};

export default Products;