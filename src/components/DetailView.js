import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import Comments from './Comments'
import NavMenu from './NavMenu'
import _ from 'lodash'
import { fetchPost, deletePost, postVote } from "../actions/Posts"
import { fetchSingleComments } from "../actions/Comments";
import FaCaretUp from 'react-icons/lib/fa/caret-up'
import FaCaretDown from 'react-icons/lib/fa/caret-down'
import FaTimesCircleO from 'react-icons/lib/fa/times-circle-o'
import FaStackExchange from 'react-icons/lib/fa/stack-exchange'
import FaEdit from 'react-icons/lib/fa/edit'


class DetailView extends Component {

    componentDidMount () {
        const { id } = this.props.match.params
        this.props.dispatch(fetchPost(id))
        this.props.dispatch(fetchSingleComments(id))
    }

    deleteButton (id) {
        this.props.dispatch(
            deletePost(id, () => {
                this.props.history.push('/')
            })
        )
    }

    upVotePost (postId) {
        this.props.dispatch(postVote(postId, 'upVote'))
    }

    downVotePost (postId) {
        this.props.dispatch(postVote(postId, 'downVote'))
    }

    render(){

        const { post, comments } = this.props

        if (post === undefined) {
            return <div>Post not found!</div>
        }

        return (

            <div className="wrapper">
                <div className="box navbox">
                    <NavMenu/>
                </div>
                <div className="vbox"></div>
                <div className="title-box">R</div>
                <div className="letter-box title-box2">eadable</div>
                <div className="content-location">
                    <div className="post-box">
                        <div key={post.id} className='post'>
                            <div className='post-header'>{post.title}</div>
                            <div className='post-content'>
                                {post.body}
                                <br/>
                                - {post.author}
                            </div>

                            <div className='post-footer'>
                                <div>
                                    Votes: {post.voteScore}
                                    <br/>
                                    <button
                                        onClick={() => this.upVotePost(post.id)}
                                    >
                                        <FaCaretUp size={30}/>
                                    </button>
                                    <button
                                        onClick={() => this.downVotePost(post.id)}
                                    >
                                        <FaCaretDown size={30}/>
                                    </button>

                                </div>
                                <div>
                                    Comments: {Object.keys(comments).length}
                                    <br/>
                                        <FaStackExchange size={30}/>
                                </div>
                                <div>
                                    Delete
                                    <br/>
                                    <button onClick={() => this.deleteButton(post.id) }>
                                        <FaTimesCircleO size={30}/>
                                    </button>

                                </div>
                                <div>
                                    Edit
                                    <br/>
                                    <Link to={`/${post.id}/edit`} className='postLink'>
                                        <FaEdit size={30}/>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <h2 className="comments-span-header"><span className="comments-span"> Comments </span></h2>

                        <Comments comments={comments} post={post}/>

                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ posts, comments }, ownProps) {
    return {
        post: posts.posts[ownProps.match.params.id],
        comments: _.orderBy(
            _.filter(comments.comments, {
                parentId: ownProps.match.params.id,
                deleted: false
            }),
            ['timestamp'],
            ['desc']
        )
    }
}

export default withRouter(connect(mapStateToProps)(DetailView))