import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';

const Calendar = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/basic`}/>
            <Route path={`${match.url}/basic`} component={asyncComponent(() => import('./routes/basic/'))}/>
            <Route path={`${match.url}/cultures`} component={asyncComponent(() => import('./routes/cultures/'))}/>
            <Route path={`${match.url}/dnd`} component={asyncComponent(() => import('./routes/dnd/'))}/>
            <Route path={`${match.url}/popup`} component={asyncComponent(() => import('./routes/popup/'))}/>
            <Route path={`${match.url}/rendering`} component={asyncComponent(() => import('./routes/rendering/'))}/>
            <Route path={`${match.url}/selectable`} component={asyncComponent(() => import('./routes/selectable/'))}/>
            <Route path={`${match.url}/timeslots`} component={asyncComponent(() => import('./routes/timeslots/'))}/>
        </Switch>
    </div>
);

export default Calendar;
