import React from 'react';
import { 
	BrowserRouter, 
	Switch, 
	Route 
} from 'react-router-dom';
import Loadable from 'react-loadable';

export default () => {
    return <BrowserRouter>
        <Switch>
            <Route
                path="/"
                component={Loadable({
                    loader: () => import('routes/MainPage.jsx'),
                    loading: () => <div>Loading...</div>
                })}/>
        </Switch>
    </BrowserRouter>
}