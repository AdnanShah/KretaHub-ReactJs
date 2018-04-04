import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardSubtitle,
    CardText,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane
} from 'reactstrap';

import classnames from 'classnames';


class NavTabCards extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <Card className="shadow border-0">
                <CardHeader className="bg-primary">
                    <Nav className="card-header-tabs" tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({active: this.state.activeTab === '1'})}
                                onClick={() => {
                                    this.toggle('1');
                                }}
                            >
                                Active
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({active: this.state.activeTab === '2'})}
                                onClick={() => {
                                    this.toggle('2');
                                }}
                            >
                                Link
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                disabled
                                className={classnames({active: this.state.activeTab === '3'})}
                                onClick={() => {
                                    this.toggle('3');
                                }}
                            >
                                Disabled
                            </NavLink>
                        </NavItem>
                    </Nav>
                </CardHeader>

                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
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
                    </TabPane>

                    <TabPane tabId="2">
                        <CardBody>
                            <h3 className="card-title">Card Title Disabled</h3>
                            <CardSubtitle>Sub-heading text Disabled</CardSubtitle>
                            <CardText>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book.
                            </CardText>
                            <CardText>It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </CardText>
                        </CardBody>
                        <CardFooter>2 days ago</CardFooter>
                    </TabPane><TabPane tabId="3">
                    <CardBody>
                        <h3 className="card-title">Card Title Active</h3>
                        <CardSubtitle>Sub-heading text Active</CardSubtitle>
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
                </TabPane>
                </TabContent>
            </Card>
        );
    }
}

export default NavTabCards