import React from 'react';
import List from 'material-ui/List';
import productData from "app/routes/eCommerce/routes/productData";
import ProductListItem from "components/eCommerce/ProductListItem";

function ProductsList() {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <List>
                {productData.map((product, index) => (
                    <ProductListItem key={index} product={product}/>
                ))}
            </List>
        </div>
    );
}

export default ProductsList;