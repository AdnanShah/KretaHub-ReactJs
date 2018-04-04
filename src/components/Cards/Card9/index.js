import React from 'react';


const GalleryCard = () => {
    return (
        <div className="jambo-card horizontal">
            <div className="card-image">
                <img src="http://via.placeholder.com/500x330"/>
            </div>
            <div className="card-body card-stacked">
                <div className="card-content">
                    <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
            <a href="javascript:void(0)" className="card-link"><i className="zmdi zmdi-image zmdi-hc-fw"/>Gallary</a>
            <a href="javascript:void(0)" className="card-link"><i className="zmdi zmdi-railway zmdi-hc-fw"/>Route</a>
        </div>
    );
};

export default GalleryCard;