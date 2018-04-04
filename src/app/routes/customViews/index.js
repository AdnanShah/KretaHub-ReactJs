import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';

const CustomViews = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/simple-list`}/>
            <Route path={`${match.url}/simple-list`} component={asyncComponent(() => import('./routes/sample'))}/>
            <Route path={`${match.url}/strip-list`} component={asyncComponent(() => import('./routes/strip'))}/>
            <Route path={`${match.url}/card-list`} component={asyncComponent(() => import('./routes/card'))}/>
        </Switch>
    </div>
);

export default CustomViews;
