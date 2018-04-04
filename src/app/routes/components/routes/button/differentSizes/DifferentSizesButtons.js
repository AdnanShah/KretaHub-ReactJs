import React from 'react';
import Button from 'material-ui/Button';

function DifferentSizesButtons() {
    return (
        <div>
            <div className="jr-btn-group">
                <Button variant="raised" color="primary" className="jr-btn jr-btn-lg">
                    primary
                </Button>
                <Button variant="raised" color="primary" className="jr-btn">
                    primary
                </Button>
                <Button variant="raised" color="primary" className="jr-btn jr-btn-sm">
                    primary
                </Button>
                <Button variant="raised" color="primary" className="jr-btn jr-btn-xs">
                    primary
                </Button>
            </div>
            <div className="jr-btn-group d-flex align-items-center flex-wrap">
                <Button variant="fab" className="jr-fab-btn bg-secondary text-white jr-btn-fab-lg">
                    <i className="zmdi zmdi-notifications zmdi-hc-lg" />
                </Button>
                <Button variant="fab" className="jr-fab-btn bg-secondary text-white">
                    <i className="zmdi zmdi-notifications zmdi-hc-lg" />
                </Button>
                <Button variant="fab" className="jr-fab-btn bg-secondary text-white jr-btn-fab-sm">
                    <i className="zmdi zmdi-refresh-sync" />
                </Button>
                <Button variant="fab" className="jr-fab-btn bg-secondary text-white jr-btn-fab-xs mb-3">
                    <i className="zmdi zmdi-cloud-done" />
                </Button>
            </div>

            <div className="jr-btn-group d-flex align-items-center flex-wrap">
                <Button className="jr-btn bg-amber jr-btn-lg text-white">
                    <i className="zmdi zmdi-shopping-basket" />
                </Button>
                <Button className="jr-btn bg-amber text-white">
                    <i className="zmdi zmdi-shopping-basket" />
                </Button>
                <Button className="jr-btn bg-amber jr-btn-sm text-white">
                    <i className="zmdi zmdi-shopping-basket" />
                </Button>
                <Button className="jr-btn bg-amber jr-btn-xs text-white">
                    <i className="zmdi zmdi-shopping-basket" />
                </Button>
            </div>

            <div className="jr-btn-group d-flex align-items-center flex-wrap">
                <Button className="jr-btn text-primary jr-btn-lg">
                    <i className="zmdi zmdi-github zmdi-hc-lg" />
                </Button>
                <Button className="jr-btn text-primary">
                    <i className="zmdi zmdi-github zmdi-hc-lg" />
                </Button>
                <Button className="jr-btn text-primary jr-btn-sm">
                    <i className="zmdi zmdi-github" />
                </Button>
                <Button className="jr-btn text-primary jr-btn-xs">
                    <i className="zmdi zmdi-github" />
                </Button>
            </div>

            <div className="jr-btn-group">
                <Button className="jr-btn text-uppercase text-primary jr-btn-lg">
                    large
                </Button>
                <Button className="jr-btn text-uppercase text-primary">
                    default
                </Button>
                <Button className="jr-btn text-uppercase text-primary jr-btn-sm">
                    small
                </Button>
                <Button className="jr-btn text-uppercase text-primary jr-btn-xs">
                    extra small
                </Button>
            </div>
        </div>
    );
}

export default DifferentSizesButtons;