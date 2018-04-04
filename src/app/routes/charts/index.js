import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';


const Chart = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/area`}/>
            <Route path={`${match.url}/area`} component={asyncComponent(() => import('./routes/area'))}/>
            <Route path={`${match.url}/bar`} component={asyncComponent(() => import('./routes/bar'))}/>
            <Route path={`${match.url}/composed`} component={asyncComponent(() => import('./routes/composed'))}/>
            <Route path={`${match.url}/line`} component={asyncComponent(() => import('./routes/line'))}/>
            <Route path={`${match.url}/pie`} component={asyncComponent(() => import('./routes/pie'))}/>
            <Route path={`${match.url}/radar`} component={asyncComponent(() => import('./routes/radar'))}/>
            <Route path={`${match.url}/radial`} component={asyncComponent(() => import('./routes/radial'))}/>
            <Route path={`${match.url}/scatter`} component={asyncComponent(() => import('./routes/scatter'))}/>
            <Route path={`${match.url}/treemap`} component={asyncComponent(() => import('./routes/treemap'))}/>
        </Switch>
    </div>
);

export default Chart;
