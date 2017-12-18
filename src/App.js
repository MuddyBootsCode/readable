import React, { Component } from 'react';
import { connect } from 'react-redux'
import Post from './components/Post'


class App extends Component {

    render() {
        return (
            <div className="App">
                <div classname="wrapper">
                    <div classname="box navbox">
                        <div classname="nav">
                            <div><a href="">All Posts</a></div>
                            <div><a href="">Udacity</a></div>
                            <div><a href="">React</a></div>
                            <div><a href="">Redux</a></div>
                        </div>
                    </div>
                    <div classname="vbox"></div>
                    <div classname="title-box">R</div>
                    <div classname="letter-box title-box2">eadable</div>
                    <div classname="content-location">
                        <ol classname="post-box">
                            {

                            }
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(){
    return {

    }
}


export default connect(mapStateToProps())(App);
