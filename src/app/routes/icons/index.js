import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';


const Icons = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/material`}/>
            <Route path={`${match.url}/material`} component={asyncComponent(() => import('./routes/Material/index'))}/>
        </Switch>
    </div>
);

export default Icons;
