import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Comments from './Comments'
import _ from 'lodash'
import { fetchPost, deletePost, postVote } from "../actions/Posts"
import { fetchSingleComments } from "../actions/Comments";
import FaCaretUp from 'react-icons/lib/fa/caret-up'
import FaCaretDown from 'react-icons/lib/fa/caret-down'
import FaTimesCircleO from 'react-icons/lib/fa/times-circle-o'
import FaStackExchange from 'react-icons/lib/fa/stack-exchange'
import FaPlusSquare from 'react-icons/lib/fa/plus-square'
import FaEdit from 'react-icons/lib/fa/edit'


class DetailView extends Component {

    componentDidMount () {
        this.fetchData()
    }

    componentDidUpdate (prevProps) {
        if (prevProps.match.params !== this.props.match.params) {
            this.fetchData()
        }
    }

    fetchData = () => {
        const {postId} = this.props.match.params
        this.props.dispatch(fetchPost(postId))
        this.props.dispatch(fetchSingleComments(postId))
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
        console.log(Object.entries(post) + ' post from detail view')
        for (const key of Object.keys(comments)) {
            console.log(key, comments[key]);
        }
        const { id } = this.props.match.params

        return (
                <div className="content-location">
                    <div className="post-box">
                        <div key={post.id} className='post'>
                            <div className='post-header'>{post.title}</div>
                            <div className='post-content'>
                                    {post.body}
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
                                    Comments: {post.commentCount}
                                    <br/>
                                    <button onClick={() => this.setState({commentsModalOpen: true})}>
                                        <FaStackExchange size={30}/>
                                    </button>
                                </div>
                                <div>
                                    Delete
                                    <br/>
                                    <button onClick={() => this.deleteButton(post.id)}>
                                        <FaTimesCircleO size={30}/>
                                    </button>

                                </div>
                                <div>
                                    Edit
                                    <br/>
                                    <button>
                                        <FaEdit size={30}/>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <h2 className="comments-header"><span className="comments-span"> Comments </span></h2>

                        <Comments comments={comments} post={post}/>

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

export default connect(mapStateToProps)(DetailView)