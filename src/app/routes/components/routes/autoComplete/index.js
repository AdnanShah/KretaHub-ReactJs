import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import CardBox from 'components/CardBox/index';
import IntegrationReactSelect from './reactSelect/IntegrationReactSelect';
import IntegrationDownshift from './downshift/IntegrationDownshift';
import IntegrationAutosuggest from './autosuggest/IntegrationAutosuggest';
import IntlMessages from 'util/IntlMessages';

const AutoComplete = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.components.autocomplete"/>} match={match}/>
            <div className="row mb-lg-4">
                <CardBox styleName="col-lg-6" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="component.autocomplete.reactSelect"/>}>
                    <IntegrationReactSelect/>
                </CardBox>

                <CardBox styleName="col-lg-6" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="component.autocomplete.reactAutosuggest"/>}>
                    <IntegrationAutosuggest/>
                </CardBox>
            </div>
            <div className="row">
                <CardBox styleName="col-lg-12" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="component.autocomplete.downshift"/>}>
                    <IntegrationDownshift/>
                </CardBox>
            </div>
        </div>
    );
};

export default AutoComplete;
