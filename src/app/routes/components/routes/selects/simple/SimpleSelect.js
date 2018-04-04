import React from 'react';
import Input, {InputLabel} from 'material-ui/Input';
import {MenuItem} from 'material-ui/Menu';
import {FormControl, FormHelperText} from 'material-ui/Form';
import Select from 'material-ui/Select';

class SimpleSelect extends React.Component {
    state = {
        age: '',
        name: 'hai',
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    render() {
        const {classes} = this.props;

        return (
            <form className="row" autoComplete="off">
                <div className="col-lg-3 col-sm-6 col-12">
                    <FormControl className="w-100 mb-2">
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

                <div className="col-lg-3 col-sm-6 col-12">
                    <FormControl className="w-100 mb-2">
                        <InputLabel htmlFor="age-helper">Age</InputLabel>
                        <Select
                            value={this.state.age}
                            onChange={this.handleChange('age')}
                            input={<Input id="age-helper"/>}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <FormHelperText>Some important helper text</FormHelperText>
                    </FormControl>
                </div>

                <div className="col-lg-3 col-sm-6 col-12">
                    <FormControl className="w-100 mb-2">
                        <Select
                            value={this.state.age}
                            onChange={this.handleChange('age')}
                            displayEmpty
                            className="mt-3"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <FormHelperText>Without label</FormHelperText>
                    </FormControl>
                </div>

                <div className="col-lg-3 col-sm-6 col-12">
                    <FormControl className="w-100 mb-2" disabled>
                        <InputLabel htmlFor="name-disabled">Name</InputLabel>
                        <Select
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            input={<Input id="name-disabled"/>}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="hai">Hai</MenuItem>
                            <MenuItem value="olivier">Olivier</MenuItem>
                            <MenuItem value="kevin">Kevin</MenuItem>
                        </Select>
                        <FormHelperText>Disabled</FormHelperText>
                    </FormControl>
                </div>

                <div className="col-lg-3 col-sm-6 col-12">
                    <FormControl className="w-100 mb-2" error>
                        <InputLabel htmlFor="name-error">Name</InputLabel>
                        <Select
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            renderValue={value => `⚠️  - ${value}`}
                            input={<Input id="name-error"/>}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="hai">Hai</MenuItem>
                            <MenuItem value="olivier">Olivier</MenuItem>
                            <MenuItem value="kevin">Kevin</MenuItem>
                        </Select>
                        <FormHelperText>Error</FormHelperText>
                    </FormControl>
                </div>

                <div className="col-lg-3 col-sm-6 col-12">
                    <FormControl className="w-100 mb-2">
                        <InputLabel htmlFor="name-input">Name</InputLabel>
                        <Input id="name-input"/>
                        <FormHelperText>Alignment with an input</FormHelperText>
                    </FormControl>
                </div>

                <div className="col-lg-3 col-sm-6 col-12">
                    <FormControl className="w-100 mb-2">
                        <InputLabel htmlFor="name-readonly">Name</InputLabel>
                        <Select
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            input={<Input id="name-readonly" readOnly/>}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="hai">Hai</MenuItem>
                            <MenuItem value="olivier">Olivier</MenuItem>
                            <MenuItem value="kevin">Kevin</MenuItem>
                        </Select>
                        <FormHelperText>Read only</FormHelperText>
                    </FormControl>
                </div>

                <div className="col-lg-3 col-sm-6 col-12">
                    <FormControl className="w-100 mb-2">
                        <InputLabel htmlFor="age-simple">Age</InputLabel>
                        <Select
                            value={this.state.age}
                            onChange={this.handleChange('age')}
                            input={<Input id="age-simple"/>}
                            autoWidth
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <FormHelperText>Auto width</FormHelperText>
                    </FormControl>
                </div>
            </form>
        );
    }
}

export default SimpleSelect;