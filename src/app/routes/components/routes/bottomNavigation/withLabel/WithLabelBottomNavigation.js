import React, {Component} from 'react';
import BottomNavigation, {BottomNavigationAction} from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';

class WithLabelBottomNavigation extends Component {
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
                <BottomNavigationAction label="Recents" icon={<RestoreIcon/>}/>
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon/>}/>
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon/>}/>
            </BottomNavigation>
        );
    }
}

export default WithLabelBottomNavigation;