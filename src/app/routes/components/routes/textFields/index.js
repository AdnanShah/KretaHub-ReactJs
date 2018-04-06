import React from 'react';
import TextFields from './textField/TextFields';
import ComposedTextField from './components/ComposedTextField';
import TextFieldMargins from './layout/TextFieldMargins';
import InputAdornments from './inputAdornments/InputAdornments';
import FormattedInputs from './formattedInputs/FormattedInputs';
import Inputs from './inputs/Inputs';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';

const TextField = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.components.textFields"/>} match={match}/>


            <div className="row mb-md-4">
                <CardBox styleName="col-lg-12" heading={<IntlMessages id="component.textFields.components"/>}>
                    <ComposedTextField/>
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-12" heading={<IntlMessages id="component.textFields.layout"/>}>
                    <TextFieldMargins/>
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-12" heading={<IntlMessages id="component.textFields.inputAdornments"/>}>
                    <InputAdornments/>
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-12" heading={<IntlMessages id="component.textFields.formattedInputs"/>}>
                    <FormattedInputs/>
                </CardBox>
            </div>

            <div className="row">
                <CardBox styleName="col-lg-12" heading={<IntlMessages id="component.textFields.inputs"/>}>
                    <Inputs/>
                </CardBox>
            </div>
        </div>
    );
};

export default (TextField);

