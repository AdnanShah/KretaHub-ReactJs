import React from 'react';
import {Popover, PopoverBody, PopoverHeader} from 'reactstrap';
import Button from 'material-ui/Button';

export default class Simple extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false
        };
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    render() {
        return (
            <div>
                <Button variant="raised" color="primary" id="Popover1" onClick={this.toggle}>
                    Launch Popover
                </Button>
                <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                    <PopoverHeader>Popover Title</PopoverHeader>
                    <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem
                        lacinia quam venenatis vestibulum.</PopoverBody>
                </Popover>
            </div>
        );
    }
}