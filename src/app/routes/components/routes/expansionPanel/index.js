import React from 'react';
import SimpleExpansionPanel from './simple';
import DetailedExpansionPanel from './detailed';
import ControlledExpansionPanels from './controlled';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader'
import IntlMessages from 'util/IntlMessages';

const ExpansionPanel = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.components.expansionPanel"/>} match={match}/>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-12" cardStyle="bg-transparent no-shadow p-0"
                         heading={<IntlMessages id="component.expansionPanel.simple"/>}
                         headerOutside>
                    <SimpleExpansionPanel/>
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-12" cardStyle="bg-transparent no-shadow p-0"
                         heading={<IntlMessages id="component.expansionPanel.controlled"/>}
                         headerOutside>
                    <ControlledExpansionPanels/>
                </CardBox>
            </div>

            <div className="row">
                <CardBox styleName="col-lg-12" cardStyle="bg-transparent no-shadow p-0"
                         heading={<IntlMessages id="component.expansionPanel.secondary"/>}
                         headerOutside>
                    <DetailedExpansionPanel/>
                </CardBox>
            </div>
        </div>
    );
};

export default ExpansionPanel;

