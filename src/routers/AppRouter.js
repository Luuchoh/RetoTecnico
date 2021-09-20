import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import CardContact from '../views/CardContact';
import ListaContact from '../views/ListaContact';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={ListaContact}/>
                <Route path="/card/:id" component={CardContact}/>
                <Route />
            </Switch>            
        </Router>
        
    )
}

export default AppRouter
