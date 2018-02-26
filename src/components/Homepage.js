import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { fetchPosts } from '../actions/Posts'
import { connect } from 'react-redux'
import Post from '../components/Post'
import NavMenu from './NavMenu'
import FaPlusSquare from 'react-icons/lib/fa/plus-square'
import _ from 'lodash'
import Loading from 'react-loading'

class Homepage extends Component {

    state = {
        fetching: false
    }


    componentDidMount(){
        this.props.dispatch(fetchPosts())
    }


    render() {

        const { category } = this.props.match.params
        const { sortValue, posts } = this.props
        const { fetching } = this.state

        let sortedPosts
        if (sortValue === 'latest') {
            sortedPosts = _.orderBy(posts, ['timestamp'], ['desc'])
        }
        if (sortValue === 'popularity') {
            sortedPosts = _.orderBy(posts, ['voteScore'], ['desc'])
        }

        let shownPosts
        if (category) {
            shownPosts = _.filter(sortedPosts, { category: category })
        } else {
            shownPosts = sortedPosts
        }

        return (
            <div className="App">
                <div className="wrapper">
                    <div className="box navbox">
                        <NavMenu/>
                    </div>
                    <div className="vbox"></div>
                    <div className="title-box">R</div>
                    <div className="letter-box title-box2">eadable</div>
                    <div className="content-location">
                        <div className="post-box">
                            { fetching === true
                                ? <Loading delay={200} type='spin' color='#222' className='loading' /> :
                                _.map(shownPosts, post => {
                                    return (
                                        <Post key={post.id} post={post}/>
                                    )
                                })
                            }
                            <div className="post">
                                <div className="post-content">
                                    <Link to='/posts/new' className='postLink'>
                                        <FaPlusSquare size={40} className='icon'/>
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
        sortValue: posts.sortPosts
    }
}

export default withRouter(connect(mapStateToProps)(Homepage))
