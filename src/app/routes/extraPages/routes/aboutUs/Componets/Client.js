import React from 'react';

const Client = ({client}) => {
    const {image} = client;

    return (
        <div className="brand-logo">
            <div className="brand-logo-inner">
                <img src={image} alt="Clients"/>
            </div>
        </div>
    );
};


export default Client;