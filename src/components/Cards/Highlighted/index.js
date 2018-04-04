import React from 'react';
import CardLayout from 'components/CardLayout';

const HighlightedHeader = () => {
    return (
        <CardLayout styleName="col-lg-6">
            <img className="card-img-top" src="http://via.placeholder.com/500x330" alt="Card image cap"/>

            <div className="card-body">
                <h2 className="card-title">Highlighted Header</h2>
                <p className="card-text text-muted">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <a href="javascript:void(0)" className="card-link text-uppercase">View More</a>
            </div>
        </CardLayout>
    );
};

export default HighlightedHeader;