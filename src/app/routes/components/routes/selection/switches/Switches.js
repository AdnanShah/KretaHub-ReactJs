import React, {Component} from 'react';
import Switch from 'material-ui/Switch';

class Switches extends Component {
    state = {
        checkedA: true,
        checkedB: true,
        checkedC: false,
        checkedD: false,
        checkedE: true,
        checkedF: true,
        checkedG: true,
    };

    handleChange = name => (event, checked) => {
        this.setState({[name]: checked});
    };

    render() {
        return (
            <div>
                <Switch
                    classes={{
                        checked: 'text-primary',
                        bar: 'bg-primary',
                    }}
                    checked={this.state.checkedA}
                    onChange={this.handleChange('checkedA')}
                    aria-label="checkedA"
                />
                <Switch
                    classes={{
                        checked: 'text-secondary',
                        bar: 'bg-secondary',
                    }}
                    checked={this.state.checkedB}
                    onChange={this.handleChange('checkedB')}
                    aria-label="checkedB"
                />


                <Switch
                    classes={{
                        checked: 'text-dark',
                        bar: 'bg-dark',
                    }}
                    checked={this.state.checkedC}
                    onChange={this.handleChange('checkedC')}
                    aria-label="checkedC"
                    disabled
                />
                <Switch
                    classes={{
                        checked: 'text-dark',
                        bar: 'bg-dark',
                    }}
                    checked={this.state.checkedD}
                    onChange={this.handleChange('checkedD')}
                    aria-label="checkedD"
                />
                <Switch
                    classes={{
                        checked: 'text-success',
                        bar: 'bg-success',
                    }}
                    checked={this.state.checkedE}
                    onChange={this.handleChange('checkedE')}
                    aria-label="checkedE"
                />

                <Switch
                    classes={{
                        checked: 'text-danger',
                        bar: 'bg-danger',
                    }}
                    checked={this.state.checkedF}
                    onChange={this.handleChange('checkedF')}
                    aria-label="checkedF"
                />

                <Switch
                    classes={{
                        checked: 'text-warning',
                        bar: 'bg-warning',
                    }}
                    checked={this.state.checkedG}
                    onChange={this.handleChange('checkedG')}
                    aria-label="checkedG"
                />
            </div>
        );
    }
}

export default Switches;