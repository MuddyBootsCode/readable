import React, { Component } from 'react';
import { connect } from 'react-redux'


class App extends Component {

    render() {
        return (
            <div className="App">
                <div class="wrapper">
                    <div class="box navbox">
                        <div class="nav">
                            <div><a href="">navlink</a></div>
                            <div><a href="">navlink</a></div>
                            <div><a href="">navlink</a></div>
                            <div><a href="">navlink</a></div>
                            <div><a href="">navlink</a></div>
                            <div><a href="">navlink</a></div>
                        </div>
                    </div>
                    <div class="vbox"></div>
                    <div class="title-box">R</div>
                    <div class="letter-box title-box2">eadable</div>

                    <div class="content-location">
                        <div class="post-box">

                        </div>

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
