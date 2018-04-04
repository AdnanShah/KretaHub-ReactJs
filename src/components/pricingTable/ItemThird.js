import React from 'react';

const
    PriceItem = ({styleName, headerStyle, itemStyle, footerStyle}) => {
        return (
            <div className={`${styleName}`}>
                <div className={`${headerStyle}`}>
                    <span className="price"><i className="zmdi zmdi-money"/>49</span>
                    <h4 className="letter-spacing-base text-uppercase mb-0">PROFESSIONAL</h4>
                </div>

                <ul className={`package-items ${itemStyle}`}>
                    <li>
                        <i className="zmdi zmdi-translate zmdi-hc-fw"/>
                        <span>Easy Translation</span>
                    </li>
                    <li>
                        <i className="zmdi zmdi-font zmdi-hc-fw"/>
                        <span>Awesome Google Fonts</span>
                    </li>
                    <li>
                        <i className="zmdi zmdi-hotel zmdi-hc-fw"/>
                        <span>Hotel Booking System</span>
                    </li>
                    <li>
                        <i className="zmdi zmdi-mail-send zmdi-hc-fw"/>
                        <span>Email Compose Interface</span>
                    </li>
                    <li>
                        <i className="zmdi zmdi-pin zmdi-hc-fw"/>
                        <span>Location Finder App</span>
                    </li>
                </ul>

                <div className="package-footer">
                    <a className={`${footerStyle}`} href="javascript:void(0)">buy now</a>
                </div>
            </div>
        )
    };

export default PriceItem;

