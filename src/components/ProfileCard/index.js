import React from 'react';

const ProfileCard = () => {
    return (
        <div className="profile-intro card shadow  border-0 text-center">

            <div className="pi-header">
                <div className="card-image layer">
                    <img className="avatar-circle" src="http://via.placeholder.com/150x150" alt="Team Member"/>
                </div>
            </div>
            <div className="pi-content">
                <h4>Robert Johnson</h4>
                <p>Designer</p>
                <p className="card-text">Hello everyone, I am Maryam. My designs are used in several big companies in United State and other
                    countries.</p>
            </div>
            <div className="pi-footer">
                <div className="icons-wrapper">
                    <a className="icon facebook-icon" href="javascript:void(0)">
                        <i className="zmdi zmdi-facebook zmdi-hc-fw zmdi-hc-lg"/>
                    </a>

                    <a className="icon twitter-icon" href="javascript:void(0)">
                        <i className="zmdi zmdi-twitter zmdi-hc-fw zmdi-hc-lg"/>
                    </a>

                    <a className="icon linkedin-icon" href="javascript:void(0)">
                        <i className="zmdi zmdi-linkedin zmdi-hc-fw zmdi-hc-lg"/>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default ProfileCard;

