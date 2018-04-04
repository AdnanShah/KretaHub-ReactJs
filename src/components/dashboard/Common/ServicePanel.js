import React from 'react';

const ServicePanel = () => {
    return (
        <div className="jr-card">
            <div className="row">

                <div className="col-6">
                    <div className="card-body">
                        <div className="color-theme">
                            <div className="color-theme-header">
                                <h3 className="color-theme-title">Service Panel </h3>
                                <a href="javascript:void(0)"
                                   className="btn close"><span>&times;</span></a>
                            </div>
                            <div className="color-theme-body">
                                <h3>With Light sidebar</h3>
                                <ul className="color-option">
                                    <li><a href="javascript:void(0)"
                                           className="bg-cyan active">7</a></li>
                                    <li><a href="javascript:void(0)"
                                           className="bg-teal">8</a></li>
                                    <li><a href="javascript:void(0)"
                                           className="bg-deep-orange">9</a></li>

                                    <li><a href="javascript:void(0)"
                                           className="bg-pink">10</a></li>
                                    <li><a href="javascript:void(0)"
                                           className="bg-blue">11</a></li>
                                    <li><a href="javascript:void(0)"
                                           className="bg-indigo">12</a></li>
                                    <li><a href="javascript:void(0)"
                                           className="bg-deep-purple">11</a></li>
                                    <li><a href="javascript:void(0)"
                                           className="bg-green">12</a></li>
                                </ul>
                                <h3>With Dark sidebar</h3>
                                <ul className="color-option cr-op-dark-sidebar">
                                    <li><a href="javascript:void(0)"
                                           className="bg-cyan active">7</a></li>
                                    <li><a href="javascript:void(0)"
                                           className="bg-teal">8</a></li>
                                    <li><a href="javascript:void(0)"
                                           className="bg-deep-orange">9</a></li>

                                    <li><a href="javascript:void(0)"
                                           className="bg-pink">10</a></li>
                                    <li><a href="javascript:void(0)"
                                           className="bg-blue">11</a></li>
                                    <li><a href="javascript:void(0)"
                                           className="bg-indigo">12</a></li>
                                    <li><a href="javascript:void(0)"
                                           className="bg-deep-purple">11</a></li>
                                    <li><a href="javascript:void(0)"
                                           className="bg-green">12</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default ServicePanel;

