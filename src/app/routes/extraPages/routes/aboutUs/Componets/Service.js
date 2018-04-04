import React from 'react';
import Button from 'material-ui/Button';
import IntlMessages from 'util/IntlMessages';

const Service = ({service}) => {
    const {id, title, description, image} = service;
    return (
        <div className="m-1">
            <div className="jr-card">
                <div className="row align-items-center">
                    <div className="col-md-5 order-md-7">
                        <div className="grid-thumb-equal">
                            <div className="grid-thumb-cover">
                                <img className="img-fluid" src={image} alt="Imac" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-7 order-md-5">
                        <div className="pt-3 p-lg-5 text-center">
                            <h2><strong>{title}</strong></h2>
                            <p>{description}</p>
                            <Button color="primary"><IntlMessages id="aboutUs.readMore"/></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Service;