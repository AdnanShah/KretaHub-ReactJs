import React from 'react';
import {Popover, PopoverBody, PopoverHeader} from 'reactstrap';
import Button from 'material-ui/Button';

class PopoverItem extends React.Component {
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
            <span className="d-inline-block">
        <Button variant="raised" color="primary" id={'Popover-' + this.props.id} onClick={this.toggle}>
          {this.props.item.text}
        </Button>
        <Popover placement={this.props.item.placement} isOpen={this.state.popoverOpen}
                 target={'Popover-' + this.props.id} toggle={this.toggle}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
        </Popover>
      </span>
        );
    }
}

class PopoversList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            popovers: [
                {
                    placement: 'top',
                    text: 'Top'
                },
                {
                    placement: 'bottom',
                    text: 'Bottom'
                },
                {
                    placement: 'left',
                    text: 'Left'
                },
                {
                    placement: 'right',
                    text: 'Right'
                }
            ]
        };
    }

    render() {
        return (
            <div className="manage-margin">
                {this.state.popovers.map((popover, i) => {
                    return <PopoverItem key={i} item={popover} id={i}/>;
                })}
            </div>
        );
    }
}

export default PopoversList;