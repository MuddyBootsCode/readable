import React, { Component } from 'react'
import { fetchPostsThunk } from './actions/index'
import { connect } from 'react-redux'


class App extends Component {

    componentDidMount(){
        this.fetchData((posts) => {
            this.setState({ posts })
            console.log(this.state)
            console.log(posts)
        })
    }

    fetchData = () => {
        this.props.fetchPostsThunk()
    }

    render() {
        return (
            <div className="App">
                <div className="wrapper">
                    <div className="box navbox">
                        <div className="nav">
                            <div><a href="">All</a></div>
                            <div><a href="">Udacity</a></div>
                            <div><a href="">React</a></div>
                            <div><a href="">Redux</a></div>
                        </div>
                    </div>
                    <div className="vbox"></div>
                    <div className="title-box">R</div>
                    <div className="letter-box title-box2">eadable</div>
                    <div className="content-location">
                        <ol className="post-box">



                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ posts }) => ({ posts})
const mapDispatchToProps = {fetchPostsThunk}
export default connect(mapStateToProps, mapDispatchToProps)(App);
