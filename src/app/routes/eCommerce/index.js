import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';

const eCommerce = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/products-list`}/>
            <Route path={`${match.url}/products-list`}
                   component={asyncComponent(() => import('./routes/ProductsList'))}/>
            <Route path={`${match.url}/products-grid`}
                   component={asyncComponent(() => import('./routes/ProductsGrid'))}/>
        </Switch>
    </div>
);

export default eCommerce;
