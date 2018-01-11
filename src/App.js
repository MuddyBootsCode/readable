import React, { Component } from 'react'
import { fetchPosts } from './actions/Posts'
import { connect } from 'react-redux'
import Post from './components/Post'
import Loading from 'react-loading'
import Modal from 'react-modal'
import FaPlusSquare from 'react-icons/lib/fa/plus-square'
import _ from 'lodash'


class App extends Component {

    state = {

        postModalOpen: false,

    }

    closePostsModal = () => this.setState(() => ({ postModalOpen: false }))


    componentDidMount(){
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
                        <div className="post-box">
                            {this.props.fetching === true
                                ? <Loading delay={200} type='spin' color='#000' className='loading'/> :
                                _.map(this.props.posts, post => {
                                    return (
                                        <Post key={post.id} post={post}/>
                                    )
                                })
                            }
                            <div className="post">
                                <div className="post-content">
                                    <button onClick={() => this.setState({postModalOpen: true})}>
                                        <FaPlusSquare size={40}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal
                    className = "modal"
                    overlayClassName = 'overlay'
                    isOpen = {this.state.postModalOpen}
                    onRequestClose = {this.closePostsModal}
                    contentLabel = 'Modal'
                >
                   <h1>Posts Form</h1>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts : state.posts.posts,
        fetching : state.posts.fetching,
        sortValue: state.posts.sortPosts
    }
}

const mapDispatchToProps = { fetchPosts }
export default connect(mapStateToProps, mapDispatchToProps)(App);
