import React from 'react';
import Button from 'material-ui/Button';

function IconButtons() {
    return (
        <div>
            <div className="jr-btn-group">
                <Button variant="raised" color="primary" className="jr-btn jr-btn-label left">
                    <i className="zmdi zmdi-headset zmdi-hc-fw "/>
                    <span>Labeled</span>
                </Button>

                <Button variant="raised" color="primary" className="jr-btn jr-btn-label right">
                    <i className="zmdi zmdi-camera zmdi-hc-fw "/>
                    <span>Camera</span>
                </Button>

                <Button variant="raised" color="primary" className="jr-btn">
                    <i className="zmdi zmdi-mic zmdi-hc-fw"/>
                    <span>Icon Button</span>
                </Button>
                <Button className="jr-btn">
                    <i className="zmdi zmdi-github zmdi-hc-fw"/>
                    <span>FLAT ICON BUTTON</span>
                </Button>
                <Button variant="raised" color="primary" className="jr-btn">
                    <i className="zmdi zmdi-mic zmdi-hc-fw"/>
                </Button>
                <Button variant="raised" className="jr-btn bg-white">
                    <i className="zmdi zmdi-github zmdi-hc-fw"/>
                </Button>
                <Button variant="raised" className="jr-btn bg-white">
                    <i className="zmdi zmdi-dropbox zmdi-hc-fw"/>
                </Button>
                <Button variant="raised" className="jr-btn bg-white">
                    <i className="zmdi zmdi-mic zmdi-hc-fw"/>
                    <span>Icon Button</span>
                </Button>
            </div>

            <div className="jr-btn-group">
                <Button variant="raised" className="jr-btn bg-light-green text-white">
                    <i className="zmdi zmdi-search zmdi-hc-fw"/>
                    <span>Search</span>
                </Button>
                <Button variant="raised" className="jr-btn bg-deep-orange text-white">
                    <i className="zmdi zmdi-shield-check zmdi-hc-fw"/>
                    <span>privacy</span>
                </Button>
                <Button variant="raised" className="jr-btn bg-amber text-white">
                    <i className="zmdi zmdi-shopping-basket zmdi-hc-fw"/>
                    <span>Shopping Cart</span>
                </Button>
                <Button variant="raised" className="jr-btn bg-pink text-white">
                    <i className="zmdi zmdi-spinner zmdi-hc-fw"/>
                    <span>Spinner</span>
                </Button>
                <Button variant="raised" className="jr-btn bg-purple text-white">
                    <i className="zmdi zmdi-thumb-up zmdi-hc-fw"/>
                    <span>Like</span>
                </Button>
                <Button variant="raised" className="jr-btn bg-teal text-white">
                    <i className="zmdi zmdi-notifications-active zmdi-hc-fw"/>
                    <span>Notifications</span>
                </Button>
            </div>

            <div className="jr-btn-group">
                <Button variant="raised" className="jr-btn bg-light-green text-white">
                    <i className="zmdi zmdi-search zmdi-hc-fw"/>
                </Button>
                <Button variant="raised" className="jr-btn bg-amber text-white">
                    <i className="zmdi zmdi-shopping-basket zmdi-hc-fw"/>
                </Button>
                <Button variant="raised" className="jr-btn bg-pink text-white">
                    <i className="zmdi zmdi-spinner zmdi-hc-fw"/>
                </Button>
                <Button variant="raised" className="jr-btn bg-purple text-white">
                    <i className="zmdi zmdi-thumb-up zmdi-hc-fw"/>
                </Button>
                <Button variant="raised" className="jr-btn bg-teal text-white">
                    <i className="zmdi zmdi-notifications-active"/>
                </Button>
                <Button variant="raised" className="jr-btn bg-white">
                    <i className="zmdi zmdi-search zmdi-hc-fw"/>
                </Button>
                <Button variant="raised" className="jr-btn bg-white">
                    <i className="zmdi zmdi-shopping-basket zmdi-hc-fw "/>
                </Button>
                <Button variant="raised" className="jr-btn bg-white">
                    <i className="zmdi zmdi-spinner zmdi-hc-fw"/>
                </Button>
                <Button variant="raised" className="jr-btn bg-white">
                    <i className="zmdi zmdi-thumb-up zmdi-hc-fw"/>
                </Button>
                <Button variant="raised" className="jr-btn bg-white">
                    <i className="zmdi zmdi-notifications-active zmdi-hc-fw"/>
                </Button>
            </div>
            <div className="jr-btn-group">
                <Button variant="fab" className="jr-fab-btn bg-light-green text-white">
                    <i className="zmdi zmdi-search zmdi-hc-fw"/>
                </Button>
                <Button variant="fab" className="jr-fab-btn bg-amber text-white">
                    <i className="zmdi zmdi-shopping-basket zmdi-hc-fw"/>
                </Button>
                <Button variant="fab" className="jr-fab-btn bg-pink text-white">
                    <i className="zmdi zmdi-spinner zmdi-hc-fw"/>
                </Button>
                <Button variant="fab" className="jr-fab-btn bg-purple text-white">
                    <i className="zmdi zmdi-thumb-up zmdi-hc-fw"/>
                </Button>
                <Button variant="fab" className="jr-fab-btn bg-teal text-white">
                    <i className="zmdi zmdi-notifications-active zmdi-hc-fw"/>
                </Button>

                <Button variant="fab" className="jr-fab-btn bg-white">
                    <i className="zmdi zmdi-search zmdi-hc-fw"/>
                </Button>
                <Button variant="fab" className="jr-fab-btn bg-white">
                    <i className="zmdi zmdi-shopping-basket zmdi-hc-fw "/>
                </Button>
                <Button variant="fab" className="jr-fab-btn bg-white">
                    <i className="zmdi zmdi-spinner zmdi-hc-fw"/>
                </Button>
                <Button variant="fab" className="jr-fab-btn bg-white">
                    <i className="zmdi zmdi-thumb-up zmdi-hc-fw"/>
                </Button>
                <Button variant="fab" className="jr-fab-btn bg-white">
                    <i className="zmdi zmdi-notifications-active zmdi-hc-fw"/>
                </Button>
            </div>

        </div>
    );
}

export default (IconButtons);