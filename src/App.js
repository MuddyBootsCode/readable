import React, { Component } from 'react'
import { fetchPosts } from './actions/index'
import { connect } from 'react-redux'
import Post from './components/Post'


class App extends Component {

    componentDidMount(){
        this.fetchData((posts) => {
            this.setState({ posts })
        })
    }

    fetchData = () => {
        this.props.fetchPosts()
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
                        <ul className="post-box">
                            {
                                this.props.posts.map((post) => {
                                    return (
                                        <Post key={post.id} post={post} />
                                    )
                                })
                            }

                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ posts }) => ({ posts })
const mapDispatchToProps = {fetchPosts}
export default connect(mapStateToProps, mapDispatchToProps)(App);
