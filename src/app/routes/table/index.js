import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';


const Table = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/basic`}/>
            <Route path={`${match.url}/basic`} component={asyncComponent(() => import('./routes/basic/index'))}/>
            <Route path={`${match.url}/data`} component={asyncComponent(() => import('./routes/data/index'))}/>
        </Switch>
    </div>
);

export default Table;
