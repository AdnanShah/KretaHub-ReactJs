import React from 'react';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';

const Portfolio = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <div className="filter-with-bg-color text-center">
                <ContainerHeader
                    styleName="text-center"
                    title={<IntlMessages id="extraPages.ourClients"/>} match={match}
                />

                <ul className="list-inline">
                    <li>
                        <a href="javascript:void(0)"><IntlMessages id="extraPages.all"/></a>
                    </li>
                    <li>
                        <a href="javascript:void(0)"><IntlMessages id="extraPages.graphicDesign"/></a>
                    </li>
                    <li>
                        <a href="javascript:void(0)"><IntlMessages id="extraPages.logo"/></a>
                    </li>
                    <li>
                        <a href="javascript:void(0)"><IntlMessages id="extraPages.mobileApp"/></a>
                    </li>
                    <li>
                        <a href="javascript:void(0)"><IntlMessages id="extraPages.web"/></a>
                    </li>
                </ul>
            </div>

            <div className="portfolio-section">
                <div className="row">
                    <div className="col-6 col-md-3 col-sm-4">
                        <div className="card-image">
                            <img src="http://via.placeholder.com/600x600" alt="..."/>
                        </div>
                    </div>

                    <div className="col-6 col-md-3 col-sm-4">
                        <div className="card-image">
                            <img src="http://via.placeholder.com/600x600" alt="..."/>
                        </div>
                    </div>

                    <div className="col-6 col-md-3 col-sm-4">
                        <div className="card-image">
                            <img src="http://via.placeholder.com/600x600" alt="..."/>
                        </div>
                    </div>

                    <div className="col-6 col-md-3 col-sm-4">
                        <div className="card-image">
                            <img src="http://via.placeholder.com/600x600" alt="..."/>
                        </div>
                    </div>

                    <div className="col-6 col-md-3 col-sm-4">
                        <div className="card-image">
                            <img src="http://via.placeholder.com/600x600" alt="..."/>
                        </div>
                    </div>

                    <div className="col-6 col-md-3 col-sm-4">
                        <div className="card-image">
                            <img src="http://via.placeholder.com/600x600" alt="..."/>
                        </div>
                    </div>

                    <div className="col-6 col-md-3 col-sm-4">
                        <div className="card-image">
                            <img src="http://via.placeholder.com/600x600" alt="..."/>
                        </div>
                    </div>

                    <div className="col-6 col-md-3 col-sm-4">
                        <div className="card-image">
                            <img src="http://via.placeholder.com/600x600" alt="..."/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;

