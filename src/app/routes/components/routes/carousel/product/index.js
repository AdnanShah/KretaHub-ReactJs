import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import ProductItem from "./ProductItem";

const ProductCarousel = ({products}) => {

    const options = {
        loop: true,
        rewind: true,
        autoplay: false,
        margin: 20,
        responsive: {
            responsiveRefreshRate: 100,
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            600: {
                items: 3
            },

            850: {
                items: 4
            },

            1050: {
                items: 5
            }
        }
    };

    return (
        <OwlCarousel className="owl-theme owl-app-frame" {...options} >
            <ProductItem product={products[0]}/>
            <ProductItem product={products[1]}/>
            <ProductItem product={products[2]}/>
            <ProductItem product={products[3]}/>
            <ProductItem product={products[4]}/>
            <ProductItem product={products[5]}/>
        </OwlCarousel>
    );
};


export default ProductCarousel;