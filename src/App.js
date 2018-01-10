import React, { Component } from 'react'
import { fetchPosts } from './actions/Posts'
import { connect } from 'react-redux'
import Post from './components/Post'
import Loading from 'react-loading'
import FaPlusSquare from 'react-icons/lib/fa/plus-square'


class App extends Component {

    state = {

        openCommentsModal: false,

    }

    openCommentsModal = () => this.setState(() => ({ postModalOpen: true }))


    componentDidMount(){
        const {fetchPosts} = this.props
        fetchPosts()
    }


    render() {

        const {postModalOpen} = this.state

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
                        <div className="post-box">
                            {this.props.fetching === true
                                ? <Loading delay={200} type='spin' color='#000' className='loading'/> :
                                this.props.posts.map((post) => {
                                    return (
                                        <Post key={post.id} post={post}/>
                                    )
                                })
                            }
                            <div className="post">
                                <div className="post-content">
                                    <FaPlusSquare size={40}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts : state.posts.posts,
        fetching : state.posts.fetching
    }
}

const mapDispatchToProps = { fetchPosts }
export default connect(mapStateToProps, mapDispatchToProps)(App);
