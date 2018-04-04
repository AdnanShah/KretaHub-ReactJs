import React from 'react';
import Button from 'material-ui/Button';

const SocialMediaButtons = () => {
    return (
        <div>
            <div className="jr-btn-group">
                <Button variant="fab" className="jr-fab-btn bg-light-blue accent-2 text-white">
                    <i className="zmdi zmdi-twitter zmdi-hc-lg" />
                </Button>
                <Button variant="fab" className="jr-fab-btn bg-indigo lighten-1 text-white">
                    <i className="zmdi zmdi-facebook zmdi-hc-lg" />
                </Button>
                <Button variant="fab" className="jr-fab-btn bg-red lighten-1 text-white">
                    <i className="zmdi zmdi-google zmdi-hc-lg" />
                </Button>
                <Button variant="fab" className="jr-fab-btn bg-red darken-2 text-white">
                    <i className="zmdi zmdi-pinterest zmdi-hc-lg" />
                </Button>
                <Button variant="fab" className="jr-fab-btn bg-brown lighten-1 text-white">
                    <i className="zmdi zmdi-instagram zmdi-hc-lg" />
                </Button>

                <Button variant="fab" className="jr-fab-btn bg-warning text-white">
                    <i className="zmdi zmdi-rss zmdi-hc-lg" />
                </Button>
                <Button variant="fab" className="jr-fab-btn bg-blue-grey text-white">
                    <i className="zmdi zmdi-tumblr zmdi-hc-lg" />
                </Button>
                <Button variant="fab" className="jr-fab-btn bg-light-blue darken-3 text-white">
                    <i className="zmdi zmdi-linkedin zmdi-hc-lg" />
                </Button>
                <Button variant="fab" className="jr-fab-btn bg-pink lighten-2 text-white">
                    <i className="zmdi zmdi-dribbble zmdi-hc-lg" />
                </Button>
                <Button variant="fab" className="jr-fab-btn bg-red accent-4 text-white">
                    <i className="zmdi zmdi-youtube zmdi-hc-lg" />
                </Button>
                <Button variant="fab" className="jr-fab-btn bg-grey darken-3 text-white">
                    <i className="zmdi zmdi-github zmdi-hc-lg" />
                </Button>
                <Button variant="fab" className="jr-fab-btn bg-light-blue lighten-2 text-white">
                    <i className="zmdi zmdi-skype zmdi-hc-lg" />
                </Button>
            </div>
            <div className="jr-btn-group">
                <Button variant="raised" className="jr-btn bg-light-blue accent-2 text-white">
                    <i className="zmdi zmdi-twitter zmdi-hc-lg" />
                </Button>
                <Button variant="raised" className="jr-btn bg-indigo lighten-1 text-white">
                    <i className="zmdi zmdi-facebook zmdi-hc-lg" />
                </Button>
                <Button variant="raised" className="jr-btn bg-red lighten-1 text-white">
                    <i className="zmdi zmdi-google zmdi-hc-lg" />
                </Button>
                <Button variant="raised" className="jr-btn bg-red darken-2 text-white">
                    <i className="zmdi zmdi-pinterest zmdi-hc-lg" />
                </Button>
                <Button variant="raised" className="jr-btn bg-brown lighten-1 text-white">
                    <i className="zmdi zmdi-instagram zmdi-hc-lg" />
                </Button>

                <Button variant="raised" className="jr-btn bg-warning text-white">
                    <i className="zmdi zmdi-rss zmdi-hc-lg" />
                </Button>
                <Button variant="raised" className="jr-btn bg-blue-grey text-white">
                    <i className="zmdi zmdi-tumblr zmdi-hc-lg" />
                </Button>
                <Button variant="raised" className="jr-btn bg-light-blue darken-3 text-white">
                    <i className="zmdi zmdi-linkedin zmdi-hc-lg" />
                </Button>
                <Button variant="raised" className="jr-btn bg-pink lighten-2 text-white">
                    <i className="zmdi zmdi-dribbble zmdi-hc-lg" />
                </Button>
                <Button variant="raised" className="jr-btn bg-red accent-4 text-white">
                    <i className="zmdi zmdi-youtube zmdi-hc-lg" />
                </Button>
                <Button variant="raised" className="jr-btn bg-grey darken-3 text-white">
                    <i className="zmdi zmdi-github zmdi-hc-lg" />
                </Button>
                <Button variant="raised" className="jr-btn bg-light-blue lighten-2 text-white">
                    <i className="zmdi zmdi-skype zmdi-hc-lg" />
                </Button>
            </div>

            <div className="jr-btn-group">
                <Button variant="raised" className="jr-btn jr-btn-lg bg-indigo lighten-1 text-white">
                    <i className="zmdi zmdi-facebook zmdi-hc-fw" />
                    <span>Signin with Facebook</span>
                </Button>
                <Button variant="raised" className="jr-btn jr-btn-lg bg-red lighten-1 text-white">
                    <i className="zmdi zmdi-google zmdi-hc-fw " />
                    <span>Signin With Google+</span>
                </Button>
            </div>
        </div>
    );
};

export default SocialMediaButtons;