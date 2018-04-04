import React from 'react';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {mailFolderListItems, otherMailFolderListItems} from '../tileData';
import CardBox from 'components/CardBox';

class TemporaryDrawer extends React.Component {
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {

        const sideList = (
            <div className="drawer">
                <List>{mailFolderListItems}</List>
                <Divider />
                <List>{otherMailFolderListItems}</List>
            </div>
        );

        const fullList = (
            <div className="full-drawer">
                <List>{mailFolderListItems}</List>
                <Divider />
                <List>{otherMailFolderListItems}</List>
            </div>
        );

        return (
            <div>
                <div className="row">
                    <CardBox styleName="col-lg-3 col-sm-6" cardStyle="text-center py-sm-5">
                        <Button variant="raised" className="jr-btn text-white bg-primary"
                                onClick={this.toggleDrawer('left', true)}>
                            <i className="zmdi zmdi-long-arrow-right zmdi-hc-fw"/>
                            <span>Open Left</span>
                        </Button>
                    </CardBox>

                    <CardBox styleName="col-lg-3 col-sm-6" cardStyle="text-center py-sm-5">
                        <Button variant="raised" className="jr-btn text-white bg-primary"
                                onClick={this.toggleDrawer('right', true)}>
                            <i className="zmdi zmdi-long-arrow-left zmdi-hc-fw"/>
                            <span>Open Right</span>
                        </Button>
                    </CardBox>

                    <CardBox styleName="col-lg-3 col-sm-6" cardStyle="text-center py-sm-5">
                        <Button variant="raised" className="jr-btn text-white bg-primary"
                                onClick={this.toggleDrawer('top', true)}>
                            <i className="zmdi zmdi-long-arrow-down zmdi-hc-fw"/>
                            <span>Open Top</span>
                        </Button>
                    </CardBox>

                    <CardBox styleName="col-lg-3 col-sm-6" cardStyle="text-center py-sm-5">
                        <Button variant="raised" className="jr-btn text-white bg-primary"
                                onClick={this.toggleDrawer('bottom', true)}>
                            <i className="zmdi zmdi-long-arrow-up zmdi-hc-fw"/>
                            <span>Open Bottom</span>
                        </Button>
                    </CardBox>
                </div>

                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
                <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('top', false)}
                        onKeyDown={this.toggleDrawer('top', false)}
                    >
                        {fullList}
                    </div>
                </Drawer>
                <Drawer
                    anchor="bottom"
                    open={this.state.bottom}
                    onClose={this.toggleDrawer('bottom', false)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('bottom', false)}
                        onKeyDown={this.toggleDrawer('bottom', false)}
                    >
                        {fullList}
                    </div>
                </Drawer>
                <Drawer
                    anchor="right"
                    open={this.state.right}
                    onClose={this.toggleDrawer('right', false)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('right', false)}
                        onKeyDown={this.toggleDrawer('right', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>

            </div>
        );
    }
}

export default TemporaryDrawer;