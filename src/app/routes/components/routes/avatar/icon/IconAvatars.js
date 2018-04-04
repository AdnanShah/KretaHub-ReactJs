import React from 'react';
import Avatar from 'material-ui/Avatar';

function IconAvatars() {
    return (
        <div className="manage-margin d-flex align-items-center justify-content-around flex-wrap">
            <Avatar className="bg-warning size-100">
                <i className="zmdi zmdi-shopping-cart zmdi-hc-2x text-white" />
            </Avatar>

            <Avatar className="bg-dark size-80">
                <i className="zmdi zmdi-format-paint zmdi-hc-lg text-white" />
            </Avatar>

            <Avatar className="bg-primary size-60">
                <i className="zmdi zmdi-seat text-white" />
            </Avatar>

            <Avatar className="bg-secondary size-40">
                <i className="zmdi zmdi-sun text-white" />
            </Avatar>

            <Avatar className="bg-black size-30">
                <i className="zmdi zmdi-truck text-white" />
            </Avatar>

            <Avatar className="bg-primary size-40">
                <i className="zmdi zmdi-cloud-done text-white" />
            </Avatar>

            <Avatar className="bg-success size-60">
                <i className="zmdi zmdi-run text-white" />
            </Avatar>

            <Avatar className="bg-info size-80">
                <i className="zmdi zmdi-face zmdi-hc-lg text-white" />
            </Avatar>

            <Avatar className="bg-danger size-100">
                <i className="zmdi zmdi-shield-security zmdi-hc-2x text-white" />
            </Avatar>
        </div>
    );
}

export default IconAvatars;