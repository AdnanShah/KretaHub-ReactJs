import React from 'react';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import Slide from 'material-ui/transitions/Slide';

function TransitionLeft(props) {
    return <Slide direction="left" {...props} />;
}

function TransitionUp(props) {
    return <Slide direction="up" {...props} />;
}

function TransitionRight(props) {
    return <Slide direction="right" {...props} />;
}

function TransitionDown(props) {
    return <Slide direction="down" {...props} />;
}

class DirectionSnackbar extends React.Component {
    state = {
        open: false,
        transition: null,
    };

    handleClick = transition => () => {
        this.setState({open: true, transition});
    };

    handleRequestClose = () => {
        this.setState({open: false});
    };

    render() {
        return (
            <div>
                <Button variant="raised" className="mb-1 mr-3" color="primary"
                        onClick={this.handleClick(TransitionLeft)}>
                    <i className="zmdi zmdi-long-arrow-right zmdi-hc-fw "/><span>Right</span>
                </Button>

                <Button variant="raised" className="mb-1 mr-3" color="primary" onClick={this.handleClick(TransitionUp)}>
                    <i className="zmdi zmdi-long-arrow-up zmdi-hc-fw "/><span>Up</span>
                </Button>

                <Button variant="raised" className="mb-1 mr-3" color="primary"
                        onClick={this.handleClick(TransitionRight)}>
                    <i className="zmdi zmdi-long-arrow-left zmdi-hc-fw "/>
                    <span>Left</span>
                </Button>

                <Button variant="raised" color="primary" onClick={this.handleClick(TransitionDown)}>
                    <i className="zmdi zmdi-long-arrow-down zmdi-hc-fw "/><span>Down</span>
                </Button>
                <Snackbar
                    open={this.state.open}
                    onClose={this.handleRequestClose}
                    transition={this.state.transition}
                    SnackbarContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">I love snacks</span>}
                />
            </div>
        );
    }
}

export default DirectionSnackbar;