import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {DialogActions, DialogContent, DialogTitle} from 'material-ui/Dialog';
import Input, {InputLabel} from 'material-ui/Input';
import {MenuItem} from 'material-ui/Menu';
import {FormControl} from 'material-ui/Form';
import Select from 'material-ui/Select';

class DialogSelect extends React.Component {
    state = {
        open: false,
        age: '',
    };

    handleChange = name => event => {
        this.setState({[name]: Number(event.target.value)});
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleRequestClose = () => {
        this.setState({open: false});
    };

    render() {

        return (
            <div>
                <Button variant="raised" color="primary" onClick={this.handleClickOpen}>Open select
                    dialog</Button>
                <Dialog
                    // className="dialog-menu"
                    disableBackdropClick
                    disableEscapeKeyDown
                    open={this.state.open}
                    onClose={this.handleRequestClose}
                >
                    <DialogTitle>Fill the form</DialogTitle>
                    <DialogContent>
                        <div className="container-fluid">
                            <form className="row">
                                <div className="col-sm-6 col-12">
                                    <FormControl className="w-100">
                                        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
                                        <Select
                                            native
                                            value={this.state.age}
                                            onChange={this.handleChange('age')}
                                            input={<Input id="age-native-simple"/>}
                                        >
                                            <option value=""/>
                                            <option value={10}>Ten</option>
                                            <option value={20}>Twenty</option>
                                            <option value={30}>Thirty</option>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="col-sm-6 col-12">
                                    <FormControl className="w-100">
                                        <InputLabel htmlFor="age-simple">Age</InputLabel>
                                        <Select
                                            value={this.state.age}
                                            onChange={this.handleChange('age')}
                                            input={<Input id="age-simple"/>}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </form>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button className="jr-btn" onClick={this.handleRequestClose} color="primary">
                            Cancel
                        </Button>
                        <Button className="jr-btn" onClick={this.handleRequestClose} color="primary">
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default DialogSelect;