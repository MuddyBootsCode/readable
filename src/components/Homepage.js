import React, { Component } from 'react'
import { withRouter, NavLink, Link } from 'react-router-dom'
import { fetchPosts } from '../actions/Posts'
import { connect } from 'react-redux'
import Post from '../components/Post'
import Loading from 'react-loading'
import Modal from 'react-modal'
import FaPlusSquare from 'react-icons/lib/fa/plus-square'
import _ from 'lodash'


class Homepage extends Component {


    componentDidMount(){
        this.props.dispatch(fetchPosts())
    }

    render() {

        return (
            <div className="App">
                <div className="wrapper">
                    <div className="box navbox">
                        <div className="nav">
                            <div><NavLink to="/" activeStyle={{textDecoration: 'underline', fontSize: '2.5em', color: 'white'}}>All</NavLink></div>
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
                                    <Link to='/posts/new' className='postLink'>
                                        <FaPlusSquare size={40}/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

function mapStateToProps ({ posts }) {
    return {
        posts : _.filter(posts.posts, { deleted: false }),
        fetching : posts.posts.fetching,
        sortValue: posts.posts.sortPosts
    }
}

export default withRouter(connect(mapStateToProps)(Homepage))
