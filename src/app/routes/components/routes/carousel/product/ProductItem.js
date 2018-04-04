import React from 'react';

const ProductItem = ({product}) => {

    const {image} = product;

    return (
        <div className="brand-logo">
            <div className="brand-logo-inner">
                <img src={image} alt="Clients"/>
            </div>
        </div>
    );
};


export default ProductItem;