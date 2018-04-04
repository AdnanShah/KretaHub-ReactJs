import React from 'react';


const UserDetailCard = () => {
    return (
        <div className="jr-card net-chart-hr bg-secondary text-white">
            <div className="jr-card-thumb">
                <div className="grid-thumb-equal">
                    <div className="grid-thumb-cover">
                        <img src="http://via.placeholder.com/150x150"/>
                    </div>
                </div>
            </div>

            <div className="jr-card-body">
                <h4 className="mb-1">Domin Harris </h4>
                <h5 className="mb-2">@h.dominc</h5>
                <span>EOM </span>
            </div>
        </div>
    );
};

export default UserDetailCard;
