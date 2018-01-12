import React, { Component } from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import Homepage from './components/Homepage'


class App extends Component {
    render() {
        return(

            <div className="App">
                <Switch>
                    <Route path="/" component={Homepage}/>
                </Switch>
            </div>

        )
    }
}

export default withRouter(App)