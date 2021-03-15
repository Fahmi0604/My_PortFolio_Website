import React, { Component } from 'react'
import Home from '../Home/HomeContent'
import Resume from '../Resume/ResumeContent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from '../Contact/ContactContent';

class MainContent extends Component {

    render() {
        return (
            <Router>

            <Switch>
                 <Route exact path="/">
                    <Home />
                 </Route>
                 <Route path="/resume">
                     <Resume />
                 </Route>
                 <Route path="/contact">
                     <Contact />
                 </Route>
            </Switch>

            </Router>
        )
    }
}

export default MainContent;
