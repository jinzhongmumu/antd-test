import React, {Component} from 'react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import App from './App';

import Login from './pages/login'
import Admin from './admin';
import Common from './common';
class MyRouter extends Component {

    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/common' render={() => <Common></Common>}></Route>

                    </Switch>
                </App>
            </HashRouter>
        )
    }
}

export default MyRouter;