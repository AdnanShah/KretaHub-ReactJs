import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import asyncComponent from '../../../util/asyncComponent';

const AppModule = ({match}) => (
    <div className="app-wrapper h-100">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/login-1`}/>
            <Route path={`${match.url}/login-1`} component={asyncComponent(() => import('./routes/login/Login1'))}/>
            <Route path={`${match.url}/login-2`} component={asyncComponent(() => import('./routes/login/Login2'))}/>
            <Route path={`${match.url}/login-with-stepper`}
                   component={asyncComponent(() => import('./routes/login/LoginWithStepper'))}/>
            <Route path={`${match.url}/sign-up-1`} component={asyncComponent(() => import('./routes/signUp/SignUP1'))}/>
            <Route path={`${match.url}/sign-up-2`} component={asyncComponent(() => import('./routes/signUp/SignUP2'))}/>
            <Route path={`${match.url}/forgot-password-1`}
                   component={asyncComponent(() => import('./routes/forgotPassword/ForgotPassword1'))}/>
            <Route path={`${match.url}/forgot-password-2`}
                   component={asyncComponent(() => import('./routes/forgotPassword/ForgotPassword2'))}/>
            <Route path={`${match.url}/lock-screen-1`}
                   component={asyncComponent(() => import('./routes/lockScreen/LockScreen1'))}/>
            <Route path={`${match.url}/lock-screen-2`}
                   component={asyncComponent(() => import('./routes/lockScreen/LockScreen2'))}/>
        </Switch>
    </div>
);

export default AppModule;
