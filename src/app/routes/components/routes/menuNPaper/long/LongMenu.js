import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import Menu, {MenuItem} from 'material-ui/Menu';
import MoreVertIcon from 'material-ui-icons/MoreVert';

const options = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
];

const ITEM_HEIGHT = 48;

class LongMenu extends Component {
    state = {
        anchorEl: undefined,
        open: false,
    };

    handleClick = event => {
        this.setState({open: true, anchorEl: event.currentTarget});
    };

    handleRequestClose = () => {
        this.setState({open: false});
    };

    render() {
        return (
            <div>
                <IconButton
                    aria-label="More"
                    aria-owns={this.state.open ? 'long-SidenavContent.js' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id="long-menu"
                    anchorEl={this.state.anchorEl}
                    open={this.state.open}
                    onClose={this.handleRequestClose}
                    style={{maxHeight: ITEM_HEIGHT * 4.5}}
                    MenuListProps={{
                        style: {
                            width: 200,
                        },
                    }}
                >
                    {options.map(option =>
                        <MenuItem key={option} selected={option === 'Pyxis'} onClick={this.handleRequestClose}>
                            {option}
                        </MenuItem>,
                    )}
                </Menu>
            </div>
        );
    }
}

export default LongMenu;