import React from 'react';


const ProductImage = () => {
    return (
        <div className="jr-card">
            <div className="jr-card-thumb">
                <img className="card-img img-fluid" src="http://via.placeholder.com/600x400"/>
            </div>

            <div className="jr-card-social">
                <ul className="social-link">
                    <li className="active">
                        <a href="javascript:void(0)"><i className="zmdi zmdi-favorite"/></a>
                    </li>
                    <li>
                        <a href="javascript:void(0)"><i className="zmdi zmdi-bookmark"/></a>
                    </li>
                    <li>
                        <a href="javascript:void(0)"><i className="zmdi zmdi-share"/></a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProductImage;