import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';


const Map = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/simple`}/>
            <Route path={`${match.url}/directions`} component={asyncComponent(() => import('./routes/directions'))}/>
            <Route path={`${match.url}/drawing`} component={asyncComponent(() => import('./routes/drawingView'))}/>
            <Route path={`${match.url}/event`} component={asyncComponent(() => import('./routes/eventHanlder'))}/>
            <Route path={`${match.url}/geo-location`} component={asyncComponent(() => import('./routes/geoLocation'))}/>
            <Route path={`${match.url}/kml`} component={asyncComponent(() => import('./routes/kmLayer'))}/>
            <Route path={`${match.url}/clustering`} component={asyncComponent(() => import('./routes/mapClustering'))}/>
            <Route path={`${match.url}/overlay`} component={asyncComponent(() => import('./routes/mapOverlay'))}/>
            <Route path={`${match.url}/popup-info`} component={asyncComponent(() => import('./routes/popUpInfo'))}/>
            <Route path={`${match.url}/simple`} component={asyncComponent(() => import('./routes/simple'))}/>
            <Route path={`${match.url}/street-view`} component={asyncComponent(() => import('./routes/streetView'))}/>
            <Route path={`${match.url}/styled`} component={asyncComponent(() => import('./routes/styled'))}/>
            <Route path={`${match.url}/traffic`} component={asyncComponent(() => import('./routes/trafficLayer'))}/>
        </Switch>
    </div>
);

export default Map;
