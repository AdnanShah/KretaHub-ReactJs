import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Dialog, {DialogActions, DialogContent, DialogContentText, DialogTitle,} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';

class AlertDialogSlide extends Component {
    state = {
        open: false,
    };

    handleRequestClose = () => {
        this.setState({open: false});
    };

    render() {
        return (
            <div>
                <Button variant="raised" className="bg-primary text-white" onClick={() => this.setState({open: true})}>Slide
                    in alert dialog</Button>
                <Dialog open={this.state.open} transition={Slide} onClose={this.handleRequestClose}>
                    <DialogTitle>
                        {"Use Google's location service?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Let Google help apps determine location. This means sending anonymous location data to
                            Google, even when no apps are running.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleRequestClose} color="secondary">
                            Disagree
                        </Button>
                        <Button onClick={this.handleRequestClose} color="primary">
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default AlertDialogSlide;