import React from 'react';
import {Link} from 'react-router-dom'
import IntlMessages from 'util/IntlMessages';

const Error500 = () => (
    <div className="page-error-container animated slideInUpTiny animation-duration-3">
        <div className="page-error-content">
            <div className="error-code mb-4 animated zoomInDown">500</div>
            <h2 className="text-center fw-regular title animated bounceIn animation-delay-10">
                <IntlMessages id="extraPages.500Msg"/></h2>

            <p className="text-center animated flipInX animation-delay-20">
                <Link className="btn btn-primary" to="/"><IntlMessages id="extraPages.goHome"/></Link>
            </p>
        </div>
    </div>
);

export default Error500;
