import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import asyncComponent from '../../../util/asyncComponent';


const Components = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/alerts`}/>
            <Route path={`${match.url}/alerts`} component={asyncComponent(() => import('./routes/alert'))}/>
            <Route path={`${match.url}/appbar`} component={asyncComponent(() => import('./routes/appbar'))}/>
            <Route path={`${match.url}/auto-complete`}
                   component={asyncComponent(() => import('./routes/autoComplete'))}/>
            <Route path={`${match.url}/avatars`} component={asyncComponent(() => import('./routes/avatar'))}/>
            <Route path={`${match.url}/badges`} component={asyncComponent(() => import('./routes/badges'))}/>
            <Route path={`${match.url}/bottom-navigation`}
                   component={asyncComponent(() => import('./routes/bottomNavigation'))}/>
            <Route path={`${match.url}/buttons`} component={asyncComponent(() => import('./routes/button'))}/>
            <Route path={`${match.url}/button-group`} component={asyncComponent(() => import('./routes/buttonGroup'))}/>
            <Route path={`${match.url}/breadcrumbs`} component={asyncComponent(() => import('./routes/breadcrumbs'))}/>
            <Route path={`${match.url}/cards`} component={asyncComponent(() => import('./routes/cards'))}/>
            <Route path={`${match.url}/carousel`} component={asyncComponent(() => import('./routes/carousel'))}/>
            <Route path={`${match.url}/chips`} component={asyncComponent(() => import('./routes/chips'))}/>
            <Route path={`${match.url}/color-picker`} component={asyncComponent(() => import('./routes/colorPicker'))}/>
            <Route path={`${match.url}/dialogs`} component={asyncComponent(() => import('./routes/dialogs'))}/>
            <Route path={`${match.url}/dividers`} component={asyncComponent(() => import('./routes/dividers'))}/>
            <Route path={`${match.url}/drawer`} component={asyncComponent(() => import('./routes/drawer'))}/>
            <Route path={`${match.url}/expansion-panel`}
                   component={asyncComponent(() => import('./routes/expansionPanel'))}/>
            <Route path={`${match.url}/grid-list`} component={asyncComponent(() => import('./routes/gridList'))}/>
            <Route path={`${match.url}/list`} component={asyncComponent(() => import('./routes/list'))}/>
            <Route path={`${match.url}/menu-paper`} component={asyncComponent(() => import('./routes/menuNPaper'))}/>
            <Route path={`${match.url}/pickers`} component={asyncComponent(() => import('./routes/pickers'))}/>
            <Route path={`${match.url}/popovers`} component={asyncComponent(() => import('./routes/popovers'))}/>
            <Route path={`${match.url}/progressbar`} component={asyncComponent(() => import('./routes/progressbar'))}/>
            <Route path={`${match.url}/selection`} component={asyncComponent(() => import('./routes/selection'))}/>
            <Route path={`${match.url}/selects`} component={asyncComponent(() => import('./routes/selects'))}/>
            <Route path={`${match.url}/snackbar`} component={asyncComponent(() => import('./routes/snackbar'))}/>
            <Route path={`${match.url}/stepper`} component={asyncComponent(() => import('./routes/stepper'))}/>
            <Route path={`${match.url}/tables`} component={asyncComponent(() => import('./routes/tables'))}/>
            <Route path={`${match.url}/tabs`} component={asyncComponent(() => import('./routes/tabs'))}/>
            <Route path={`${match.url}/text-fields`} component={asyncComponent(() => import('./routes/textFields'))}/>
            <Route path={`${match.url}/tooltips`} component={asyncComponent(() => import('./routes/tooltip'))}/>
            <Route path={`${match.url}/typography`} component={asyncComponent(() => import('./routes/typography'))}/>
        </Switch>
    </div>
);

export default Components;
