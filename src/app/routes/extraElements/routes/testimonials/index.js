import React from 'react';
import CardBox from 'components/CardBox/index';
import ContainerHeader from 'components/ContainerHeader/index';
import OwlCarousel from 'react-owl-carousel';
import Basic from './Basic'
import Classic from './Classic'
import Standard from './Standard'
import {basicTestimonialsData, testimonialsData} from './testimonialsData'
import IntlMessages from 'util/IntlMessages';


class Testimonials extends React.Component {

    render() {
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
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            }
        };

        const options1 = {
            loop: true,
            rewind: true,
            autoplay: false,
            margin: 20,
            responsive: {
                responsiveRefreshRate: 100,
                0: {
                    items: 1
                },
                850: {
                    items: 2
                }
            }
        };

        return (
            <div className="animated slideInUpTiny animation-duration-3">
                <ContainerHeader match={this.props.match}
                                 title={<IntlMessages id="extraElements.testimonials"/>}
                                 description="In promotion and of advertising, a testimonial or show consists of a person's written or spoken statement extolling the virtue of a product. "
                />

                <div className="row">
                    <CardBox styleName="col-lg-12" heading={<IntlMessages id="testimonials.basic"/>}>
                        <OwlCarousel className="owl-theme" items={1} margin={20}>
                            <Basic testimonial={basicTestimonialsData[0]}/>
                            <Basic testimonial={basicTestimonialsData[1]}/>
                            <Basic testimonial={basicTestimonialsData[2]}/>
                            <Basic testimonial={basicTestimonialsData[3]}/>
                            <Basic testimonial={basicTestimonialsData[4]}/>
                            <Basic testimonial={basicTestimonialsData[5]}/>
                            <Basic testimonial={basicTestimonialsData[6]}/>
                        </OwlCarousel>
                    </CardBox>
                    <CardBox styleName="col-lg-12" heading={<IntlMessages id="testimonials.classic"/>}>
                        <OwlCarousel className="owl-theme" {...options}>
                            <Classic testimonial={testimonialsData[0]}/>
                            <Classic testimonial={testimonialsData[1]}/>
                            <Classic testimonial={testimonialsData[2]}/>
                            <Classic testimonial={testimonialsData[3]}/>
                            <Classic testimonial={testimonialsData[4]}/>
                            <Classic testimonial={testimonialsData[5]}/>
                            <Classic testimonial={testimonialsData[6]}/>
                        </OwlCarousel>
                    </CardBox>
                    <CardBox styleName="col-lg-12" heading={<IntlMessages id="testimonials.standard"/>}>
                        <OwlCarousel className="owl-theme" {...options1}>
                            <Standard testimonial={testimonialsData[0]}/>
                            <Standard testimonial={testimonialsData[1]}/>
                            <Standard testimonial={testimonialsData[2]}/>
                            <Standard testimonial={testimonialsData[3]}/>
                            <Standard testimonial={testimonialsData[4]}/>
                            <Standard testimonial={testimonialsData[5]}/>
                            <Standard testimonial={testimonialsData[6]}/>
                        </OwlCarousel>
                    </CardBox>
                </div>
            </div>
        )
    };
}

export default Testimonials;