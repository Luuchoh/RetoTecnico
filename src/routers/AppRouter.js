import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import CardContact from '../views/CardContact';
import ListaContact from '../views/ListaContact';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={ListaContact}/>
                <Route exact path="/card/:id" component={CardContact}/>

                <Redirect to="/" />
            </Switch>            
        </Router>
        
    )
}

export default AppRouter
