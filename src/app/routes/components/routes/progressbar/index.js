import React from 'react';

import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';

import CircularIndeterminate from './circular/indeterminate/CircularIndeterminate';
import CircularFab from './circular/interactive/CircularFab';
import CircularDeterminate from './circular/determinate/CircularDeterminate';
import LinearIndeterminate from './linear/indeterminate/LinearIndeterminate';
import LinearDeterminate from './linear/determinate/LinearDeterminate';
import LinearBuffer from './linear/buffer/LinearBuffer';
import LinearQuery from './linear/query/LinearQuery';
import IntlMessages from 'util/IntlMessages';

const Progress = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.components.progress"/>} match={match}/>

            <div className="row">
                <CardBox styleName="col-md-6 col-12" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="component.progress.indeterminateCircular"/>}>
                    <CircularIndeterminate/>
                </CardBox>

                <CardBox styleName="col-md-6 col-12" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="component.progress.determinateCircular"/>}>
                    <CircularDeterminate/>
                </CardBox>

                <CardBox styleName="col-md-6 col-12" chldrenStyle=""
                         heading={<IntlMessages id="component.progress.indeterminateLinear"/>}>
                    <LinearIndeterminate/>
                </CardBox>

                <CardBox styleName="col-md-6 col-12" chldrenStyle=""
                         heading={<IntlMessages id="component.progress.determinateLinear"/>}>
                    <LinearDeterminate/>
                </CardBox>

                <CardBox styleName="col-md-6 col-12" chldrenStyle=""
                         heading={<IntlMessages id="component.progress.bufferLinear"/>}>
                    <LinearBuffer/>
                </CardBox>

                <CardBox styleName="col-md-6 col-12" chldrenStyle=""
                         heading={<IntlMessages id="component.progress.queryLinear"/>}>
                    <LinearQuery/>
                </CardBox>

                <CardBox styleName="col-lg-12 col-12" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="component.progress.interactiveIntegration"/>}>
                    <CircularFab/>
                </CardBox>
            </div>
        </div>
    );
};

export default Progress;

