import React from 'react';
import Input, {InputLabel} from 'material-ui/Input';
import {FormControl, FormHelperText} from 'material-ui/Form';
import Select from 'material-ui/Select';

class NativeSelect extends React.Component {
    state = {
        age: '',
        name: 'hai',
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    render() {

        return (
            <div className="row">
                <div className="col-lg-3 col-sm-6 col-12">
                    <FormControl className="w-100 mb-2">
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
                <div className="col-lg-3 col-sm-6 col-12">
                    <FormControl className="w-100 mb-2">
                        <InputLabel htmlFor="age-native-helper">Age</InputLabel>
                        <Select
                            native
                            value={this.state.age}
                            onChange={this.handleChange('age')}
                            input={<Input id="age-native-helper"/>}
                        >
                            <option value=""/>
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                        <FormHelperText>Some important helper text</FormHelperText>
                    </FormControl>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                    <FormControl className="w-100 mb-2">
                        <Select
                            native
                            value={this.state.age}
                            onChange={this.handleChange('age')}
                            className="mt-3"
                        >
                            <option value="">None</option>
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                        <FormHelperText>Without label</FormHelperText>
                    </FormControl>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                    <FormControl className="w-100 mb-2" disabled>
                        <InputLabel htmlFor="name-native-disabled">Name</InputLabel>
                        <Select
                            native
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            input={<Input id="name-native-disabled"/>}
                        >
                            <option value=""/>
                            <optgroup label="Author">
                                <option value="hai">Hai</option>
                            </optgroup>
                            <optgroup label="Contributors">
                                <option value="olivier">Olivier</option>
                                <option value="kevin">Kevin</option>
                            </optgroup>
                        </Select>
                        <FormHelperText>Disabled</FormHelperText>
                    </FormControl>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                    <FormControl className="w-100 mb-2" error>
                        <InputLabel htmlFor="name-native-error">Name</InputLabel>
                        <Select
                            native
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            input={<Input id="name-native-error"/>}
                        >
                            <option value=""/>
                            <optgroup label="Author">
                                <option value="hai">Hai</option>
                            </optgroup>
                            <optgroup label="Contributors">
                                <option value="olivier">Olivier</option>
                                <option value="kevin">Kevin</option>
                            </optgroup>
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
                        <InputLabel htmlFor="uncontrolled-native">Name</InputLabel>
                        <Select native defaultValue={30} input={<Input id="uncontrolled-native"/>}>
                            <option value=""/>
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                        <FormHelperText>Uncontrolled</FormHelperText>
                    </FormControl>
                </div>
            </div>
        );
    }
}

export default NativeSelect;