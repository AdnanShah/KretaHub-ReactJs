import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import Tabs, {Tab} from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
import {Card, CardBody, CardFooter, CardSubtitle, CardText} from 'reactstrap';

function TabContainer({children, dir}) {
    return (
        <div dir={dir}>
            {children}
        </div>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

class TabCards extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    handleChangeIndex = index => {
        this.setState({value: index});
    };

    render() {
        const {theme} = this.props;

        return (
            <Card className="shadow border-0">
                <AppBar className="bg-primary" position="static" style={{paddingTop: 22, height: 70}}>

                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        fullWidth>
                        <Tab className="tab" label="Active"/>
                        <Tab className="tab" label="TAB 1"/>
                        <Tab className="tab" label="TAB 2"/>
                    </Tabs>
                </AppBar>

                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}>

                    <TabContainer dir={theme.direction}>
                        <div>
                            <CardBody>
                                <h3 className="card-title">Card Title</h3>
                                <CardSubtitle>Sub-heading text</CardSubtitle>
                                <CardText>
                                    Small plates, salads & sandwiches in an
                                    intimate setting with 12 indoor seats plus
                                    patio seating
                                </CardText>
                                <CardText>
                                    Donec imperdiet enim et dignissim interdum. Pellentesque in ortti tor elit.
                                    Curabitur consectetur.
                                </CardText>
                            </CardBody>
                            <CardFooter>2 days ago</CardFooter>
                        </div>
                    </TabContainer>
                    <TabContainer dir={theme.direction}>
                        <div>
                            <CardBody>
                                <h3 className="card-title">Card Title</h3>
                                <CardSubtitle>Sub-heading text</CardSubtitle>
                                <CardText>
                                    Small plates, salads & sandwiches in an
                                    intimate setting with 12 indoor seats plus
                                    patio seating
                                </CardText>
                                <CardText>
                                    Donec imperdiet enim et dignissim interdum. Pellentesque in ortti tor elit.
                                    Curabitur consectetur.
                                </CardText>
                            </CardBody>
                            <CardFooter>2 days ago</CardFooter>
                        </div>
                    </TabContainer>
                    <TabContainer dir={theme.direction}>
                        <div>
                            <CardBody>
                                <h3 className="card-title">Card Title</h3>
                                <CardSubtitle>Sub-heading text</CardSubtitle>
                                <CardText>
                                    Small plates, salads & sandwiches in an
                                    intimate setting with 12 indoor seats plus
                                    patio seating
                                </CardText>
                                <CardText>
                                    Donec imperdiet enim et dignissim interdum. Pellentesque in ortti tor elit.
                                    Curabitur consectetur.
                                </CardText>
                            </CardBody>
                            <CardFooter>2 days ago</CardFooter>
                        </div>
                    </TabContainer>

                </SwipeableViews>

            </Card>

        );
    }
}

TabCards.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default withStyles(null, {withTheme: true})(TabCards);