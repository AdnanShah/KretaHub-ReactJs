import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import TestimonialItem from "./TestimonialItem";

const TestimonialCarousel = ({testimonials}) => {
    return (

        <OwlCarousel className="owl-theme" items={1} margin={20}>
            <TestimonialItem testimonial={testimonials[0]}/>
            <TestimonialItem testimonial={testimonials[1]}/>
            <TestimonialItem testimonial={testimonials[2]}/>
            <TestimonialItem testimonial={testimonials[3]}/>
            <TestimonialItem testimonial={testimonials[4]}/>
            <TestimonialItem testimonial={testimonials[5]}/>
            <TestimonialItem testimonial={testimonials[6]}/>
        </OwlCarousel>
    )
};

export default TestimonialCarousel;

