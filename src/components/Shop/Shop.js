import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';


const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(doc => setProduct(doc))
    }, [])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
    }
    return (
        <div className='main-shop'>
            <div className='left-shop'>
                <h1>Total Item Found: {products.length}</h1>
                <div className="single-product">
                    {
                        products.map(product => <Products key={product.id} singleProducts={product}handleAddToCart={handleAddToCart}></Products>)
                    }
                </div>
            </div>
            <div className='cart-shop'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;