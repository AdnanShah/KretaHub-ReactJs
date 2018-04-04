import React from 'react';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader'
import Simple from './simple/index';
import {products, testimonials} from './data'
import ProductCarousel from './product/index';
import TestimonialCarousel from './testimonial/index';
import IntlMessages from 'util/IntlMessages';

const Carousel = ({match}) => (
    <div className="animated slideInUpTiny animation-duration-3">
        <ContainerHeader title={<IntlMessages id="sidebar.components.carousel"/>} match={match}/>

        <div className="row mb-md-4">
            <CardBox styleName="col-lg-12" heading={<IntlMessages id="component.carousel.basic"/>}>
                <div><IntlMessages id="component.carousel.basicTxt"/></div>
                <Simple/>
            </CardBox>
        </div>

        <div className="row mb-md-4">
            <CardBox styleName="col-lg-12" cardStyle="text-center"
                     heading={<IntlMessages id="component.carousel.product"/>}>
                <div><IntlMessages id="component.carousel.productTxt"/></div>
                <ProductCarousel products={products}/>
            </CardBox>
        </div>

        <div className="row mb-md-4">
            <CardBox styleName="col-lg-12" cardStyle="text-center"
                     heading={<IntlMessages id="component.carousel.testimonial"/>}>
                <div><IntlMessages id="component.carousel.testimonialTxt"/></div>
                <TestimonialCarousel testimonials={testimonials}/>
            </CardBox>
        </div>
    </div>
);
export default Carousel;