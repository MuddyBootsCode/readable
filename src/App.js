import React, { Component } from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import Homepage from './components/Homepage'
import DetailView from './components/DetailView'
import CommentForm from './components/CommentForm'
import PostForm from './components/PostForm'


class App extends Component {

    render() {

        return(

            <div className="App">
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/posts/new" component={PostForm} />
                    <Route path="/:id/edit" component={PostForm} />
                    <Route path="/:id/newcomment" component={CommentForm} />
                    <Route path="/:id/:commentId/edit" component={CommentForm} />
                    <Route path="/:category/:id" component={DetailView} />
                    <Route path="/:category" component={Homepage} />
                </Switch>
            </div>

        )
    }
}

export default withRouter(App)