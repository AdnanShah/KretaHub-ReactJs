import React from 'react';
import Avatar from 'material-ui/Avatar';
import CardLayout from 'components/CardLayout';

const PostCard = () => {
    return (
        <CardLayout styleName="col-lg-6">
            <div className="card-header">
                <div className="user-profile d-flex flex-row align-items-center">
                    <Avatar
                        alt="..."
                        src="http://via.placeholder.com/150x150"
                        className="user-avatar"
                    />
                    <div className="user-detail">
                        <h5 className="user-name">Jimmy Ropertson</h5>
                        <p className="user-description">An explorer on a journeyAn explorer on a journey</p>
                    </div>
                </div>
            </div>
            <img className="img-fluid" src="http://via.placeholder.com/500x330" alt="Card image cap"/>
            <div className="card-body">
                <p className="card-text text-muted">
                    Some quick example text to build on the card title and make up the bulk of the card's content. Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
                </p>
                <a href="javascript:void(0)" className="card-link text-uppercase"><i className="zmdi zmdi-image-o zmdi-hc-fw"/>latest pictures</a>
            </div>
        </CardLayout>
    );
};

export default PostCard;