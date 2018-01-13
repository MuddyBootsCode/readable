import React, { Component } from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import Homepage from './components/Homepage'
import DetailView from './components/DetailView'


class App extends Component {

    render() {

        return(

            <div className="App">
                <Switch>
                    <Route exact path="/" component={ Homepage }/>
                    <Route path="/:category/:id" component={ DetailView }/>
                </Switch>
            </div>

        )
    }
}

export default withRouter(App)