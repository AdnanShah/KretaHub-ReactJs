import React from 'react';
import ProductGridItem from 'components/eCommerce/ProductGridItem'
import productData from "app/routes/eCommerce/routes/productData";

function ProductsGrid() {
    return (
        <div className="row animated slideInUpTiny animation-duration-3">
            {productData.map((product, index) => (
                <ProductGridItem key={index} product={product}/>
            ))}
        </div>
    );
}

export default ProductsGrid;