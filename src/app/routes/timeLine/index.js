import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';


const TimeLine = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/default`}/>
            <Route path={`${match.url}/default`} component={asyncComponent(() => import('./routes/default'))}/>
            <Route path={`${match.url}/default-with-icon`}
                   component={asyncComponent(() => import('./routes/defaultWithIcon'))}/>
            <Route path={`${match.url}/left-align`} component={asyncComponent(() => import('./routes/leftAligned'))}/>
            <Route path={`${match.url}/zigzag`} component={asyncComponent(() => import('./routes/zigzag'))}/>
        </Switch>
    </div>
);

export default TimeLine;
