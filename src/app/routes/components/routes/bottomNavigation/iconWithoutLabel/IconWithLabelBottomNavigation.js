import React, {Component} from 'react';
import BottomNavigation, {BottomNavigationAction} from 'material-ui/BottomNavigation';

class IconWithLabelBottomNavigation extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {value} = this.state;

        return (
            <BottomNavigation value={value} onChange={this.handleChange} showLabels
                              className={'flex-wrap bottom-navigation'}>
                <BottomNavigationAction icon={<i className="zmdi zmdi-time-restore-setting zmdi-hc-2x"/>}/>
                <BottomNavigationAction icon={<i className="zmdi zmdi-favorite zmdi-hc-2x"/>}/>
                <BottomNavigationAction icon={<i className="zmdi zmdi-pin zmdi-hc-2x"/>}/>
                <BottomNavigationAction icon={<i className="zmdi zmdi-eye zmdi-hc-2x"/>}/>
                <BottomNavigationAction icon={<i className="zmdi zmdi-email zmdi-hc-2x"/>}/>
            </BottomNavigation>
        );
    }
}

export default IconWithLabelBottomNavigation;