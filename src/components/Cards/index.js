import React from 'react';
import 'jquery-slimscroll/jquery.slimscroll.min';
import CardBox from "../CardBox/index";

import GalleryCard from './Highlighted';
import Card2 from './HeighlightedHeaderWithBg';
import Card3 from './Card3';
import Card4 from './Gallery';
import Card5 from './Tabbed';
import Card6 from './Post';
import CafeCard from './Cafe';
import Card8 from './Card8';
import Card9 from './Card9';
import Gallery from './List';
import ContactCard from './Contact';
import WeatherCard from './Weather';


class Cards extends React.Component {

    componentDidMount() {
        $('.card-view').slimscroll({
            height: '100vh'
        });
    }

    render() {
        return (
            <div className="app-container">
                <div className="app-main-content app-wrapper">
                    <div className="card-view">
                        <div className="row">
                            <CardBox heading="Simple App bar">
                                <Card2 />
                            </CardBox>
                            <CardBox heading="Simple App bar">
                                <GalleryCard/>
                            </CardBox>
                            <CardBox heading="Simple App bar">
                                <Card3 />
                            </CardBox>
                            <CardBox heading="Simple App bar">
                                <Card4 />
                            </CardBox>
                            <CardBox heading="Simple App bar">
                                <Card5 />
                            </CardBox>
                            <CardBox heading="Simple App bar">
                                <Card6 />
                            </CardBox>
                            <CardBox heading="Simple App bar">
                                <CafeCard/>
                            </CardBox>
                            <CardBox heading="Simple App bar">
                                <Card8 />
                            </CardBox>
                            <CardBox heading="Simple App bar">
                                <Card9 />
                            </CardBox>
                            <CardBox heading="Simple App bar">
                                <Gallery/>
                            </CardBox>
                            <CardBox heading="Simple App bar">
                                <ContactCard/>
                            </CardBox>
                            <CardBox heading="Simple App bar">
                                <WeatherCard/>
                            </CardBox>


                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;
