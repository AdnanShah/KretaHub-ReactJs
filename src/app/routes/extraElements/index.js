import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';


const ExtraElements = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/pricing-table`}/>
            <Route path={`${match.url}/pricing-table`}
                   component={asyncComponent(() => import('./routes/pricingTable'))}/>
            <Route path={`${match.url}/callouts`} component={asyncComponent(() => import('./routes/callouts'))}/>
            <Route path={`${match.url}/testimonials`}
                   component={asyncComponent(() => import('./routes/testimonials'))}/>
        </Switch>
    </div>
);

export default ExtraElements;
