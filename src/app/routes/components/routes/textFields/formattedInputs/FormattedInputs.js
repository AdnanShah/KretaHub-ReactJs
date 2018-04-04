import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';
import Input from 'material-ui/Input';

class TextMaskCustom extends React.Component {
    render() {
        return (
            <MaskedInput
                {...this.props}
                mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                placeholderChar={'\u2000'}
                showMask
            />
        );
    }
}

class NumberFormatCustom extends React.Component {
    render() {
        return (
            <NumberFormat
                {...this.props}
                onValueChange={values => {
                    this.props.onChange({
                        target: {
                            value: values.value,
                        },
                    });
                }}
                thousandSeparator
                prefix="$"
            />
        );
    }
}

NumberFormatCustom.propTypes = {
    onChange: PropTypes.func.isRequired,
};

class FormattedInputs extends React.Component {
    state = {
        textmask: '(1  )    -    ',
        numberformat: '1320',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        return (
            <div className="row">
                <div className="col-lg-4 col-sm-6 col-12">
                    <Input
                        value={this.state.textmask}
                        inputComponent={TextMaskCustom}
                        onChange={this.handleChange('textmask')}
                        className="w-100 mb-3"
                        inputProps={{
                            'aria-label': 'Description',
                        }}
                    />
                </div>

                <div className="col-lg-4 col-sm-6 col-12">
                    <Input
                        value={this.state.numberformat}
                        onChange={this.handleChange('numberformat')}
                        inputComponent={NumberFormatCustom}
                        className="w-100 mb-3"
                        inputProps={{
                            'aria-label': 'Description',
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default FormattedInputs;