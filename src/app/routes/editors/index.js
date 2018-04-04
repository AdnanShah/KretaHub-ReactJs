import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';


const Editors = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/ck`}/>
            <Route path={`${match.url}/ck`} component={asyncComponent(() => import('./routes/CK'))}/>
            <Route path={`${match.url}/wysiswyg`} component={asyncComponent(() => import('./routes/WYSISWYG'))}/>
        </Switch>
    </div>
);

export default Editors;
