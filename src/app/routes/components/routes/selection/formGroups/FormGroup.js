import React, {Component} from 'react';
import Checkbox from 'material-ui/Checkbox';
import {FormControlLabel, FormGroup, FormHelperText} from 'material-ui/Form';

class FormGroups extends Component {
    state = {
        checkedA: true,
        checkedB: false,
        checkedC: false,
        checkedD: false,
        checkedE: false,
        checkedF: false,
        checkedG: false,
        checkedH: false,
        checkedJ: false,
        checkedK: false,
        checkedL: false,

    };

    handleChange = name => (event, checked) => {
        this.setState({[name]: checked});
    };

    render() {

        return (
            <div className="row">
                <div className="col-sm-4">
                    <div className="mb-4">
                        <FormHelperText className="text-grey">Responsibilities</FormHelperText>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.state.checkedA}
                                        onChange={this.handleChange('checkedA')}
                                        value="checkedA"
                                    />
                                }
                                label="Technical Lead"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox color="primary"
                                              checked={this.state.checkedB}
                                              onChange={this.handleChange('checkedB')}
                                              value="checkedB"
                                    />
                                }
                                label="Project Manager"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox color="primary"
                                              checked={this.state.checkedC}
                                              onChange={this.handleChange('checkedC')}
                                              value="checkedC"
                                    />
                                }
                                label="Web Developer"
                            />

                        </FormGroup>

                    </div>
                    <div>
                        <FormHelperText className="text-grey">Projects</FormHelperText>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox color="primary"
                                              checked={this.state.checkedD}
                                              onChange={this.handleChange('checkedD')}
                                              value="checkedD"
                                    />
                                }
                                label="Mouldifi"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox color="primary"
                                              checked={this.state.checkedE}
                                              onChange={this.handleChange('checkedE')}
                                              value="checkedE"
                                    />
                                }
                                label="Jambo React"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox color="primary"
                                              checked={this.state.checkedF}
                                              onChange={this.handleChange('checkedF')}
                                              value="checkedF"
                                    />
                                }
                                label="Chatbull"
                            />

                        </FormGroup>
                    </div>
                </div>

                <div className="col-sm-8">
                    <div className="mb-4">
                        <FormHelperText className="text-grey">Responsibilities</FormHelperText>
                        <FormGroup className="d-flex flex-row">
                            <FormControlLabel
                                control={
                                    <Checkbox color="primary"
                                              checked={this.state.checkedG}
                                              onChange={this.handleChange('checkedG')}
                                              value="checkedG"
                                    />
                                }
                                label="Technical Lead"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox color="primary"
                                              checked={this.state.checkedH}
                                              onChange={this.handleChange('checkedH')}
                                              value="checkedH"
                                    />
                                }
                                label="Project Manager"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox color="primary"
                                              checked={this.state.checkedI}
                                              onChange={this.handleChange('checkedI')}
                                              value="checkedI"
                                    />
                                }
                                label="Web Developer"
                            />

                        </FormGroup>
                    </div>
                    <div>
                        <FormHelperText className="text-grey">Projects</FormHelperText>
                        <FormGroup className="d-flex flex-row">
                            <FormControlLabel
                                control={
                                    <Checkbox color="primary"
                                              checked={this.state.checkedJ}
                                              onChange={this.handleChange('checkedJ')}
                                              value="checkedJ"
                                    />
                                }
                                label="Mouldifi"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox color="primary"
                                              checked={this.state.checkedK}
                                              onChange={this.handleChange('checkedK')}
                                              value="checkedK"
                                    />
                                }
                                label="Jambo React"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox color="primary"
                                              checked={this.state.checkedL}
                                              onChange={this.handleChange('checkedL')}
                                              value="checkedL"
                                    />
                                }
                                label="Chatbull"
                            />

                        </FormGroup>
                    </div>
                </div>

            </div>


        );
    }
}

export default FormGroups;