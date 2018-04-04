import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import List, {ListItem, ListItemText} from 'material-ui/List';
import Dialog, {DialogActions, DialogContent, DialogTitle} from 'material-ui/Dialog';
import Radio, {RadioGroup} from 'material-ui/Radio';
import {FormControlLabel} from 'material-ui/Form';

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

class ConfirmationDialog extends React.Component {
    state = {
        value: undefined,
    };
    radioGroup = null;
    handleEntering = () => {
        this.radioGroup.focus();
    };
    handleCancel = () => {
        this.props.onClose(this.props.value);
    };
    handleOk = () => {
        this.props.onClose(this.state.value);
    };
    handleChange = (event, value) => {
        this.setState({value});
    };

    componentWillMount() {
        this.setState({value: this.props.value});
    }

    componentWillUpdate(nextProps) {
        if (nextProps.value !== this.props.value) {
            // eslint-disable-next-line react/no-will-update-set-state
            this.setState({value: nextProps.value});
        }
    }

    render() {
        const {value, ...other} = this.props;

        return (
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                maxWidth="xs"
                onEntering={this.handleEntering}
                {...other}
            >
                <DialogTitle>Phone Ringtone</DialogTitle>
                <DialogContent>
                    <RadioGroup
                        ref={node => {
                            this.radioGroup = node;
                        }}
                        aria-label="ringtone"
                        name="ringtone"
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        {options.map(option => (
                            <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
                        ))}
                    </RadioGroup>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleCancel} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleOk} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

ConfirmationDialog.propTypes = {
    onClose: PropTypes.func,
    value: PropTypes.string,
};

class ConfirmationDialogDemo extends React.Component {
    state = {
        open: false,
        value: 'Dione',
    };

    button = undefined;

    handleClickListItem = () => {
        this.setState({open: true});
    };

    handleRequestClose = value => {
        this.setState({value, open: false});
    };

    render() {
        return (
            <div className="d-inline-block w-100">
                <List>
                    <ListItem button divider disabled>
                        <ListItemText primary="Interruptions" />
                    </ListItem>
                    <ListItem
                        button
                        divider
                        aria-haspopup="true"
                        aria-controls="ringtone-menu"
                        aria-label="Phone ringtone"
                        onClick={this.handleClickListItem}
                    >
                        <ListItemText primary="Phone ringtone" secondary={this.state.value} />
                    </ListItem>
                    <ListItem button divider disabled>
                        <ListItemText primary="Default notification ringtone" secondary="Tethys" />
                    </ListItem>
                    <ConfirmationDialog
                        open={this.state.open}
                        onClose={this.handleRequestClose}
                        value={this.state.value}

                    />
                </List>
            </div>
        );
    }
}

export default ConfirmationDialogDemo;