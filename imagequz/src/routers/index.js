import React from 'react';
import {BrowserRouter, HashRouter, Route, Switch, useHistory} from 'react-router-dom';

import Login from '@/view/Login/';
import List from '@/view/List/';
import SignUp from '@/view/SignUp/';
import QuestionList from '@/view/QuestionList/';

const BasicRoute = () => (
    <HashRouter history={useHistory}>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/list" component={List}/>
            <Route path="/signUp" component={SignUp}/>
            <Route path="/questionList" component={QuestionList}/>
        </Switch>
    </HashRouter>
);
export default BasicRoute;
