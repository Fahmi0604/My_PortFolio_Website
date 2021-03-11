import React, { Component } from 'react'
import Home from '../Home/HomeContent'
import Resume from '../Resume/ResumeContent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
                 {/* <Route path="/Contact" component={Resume} /> */}
            </Switch>

            </Router>
        )
    }
}

export default MainContent;
