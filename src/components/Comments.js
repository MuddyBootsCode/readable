import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import _ from 'lodash'
import { voteComment, deleteComment} from "../actions/Comments";
import FaCaretUp from 'react-icons/lib/fa/caret-up'
import FaCaretDown from 'react-icons/lib/fa/caret-down'
import FaTimesCircleO from 'react-icons/lib/fa/times-circle-o'
import FaEdit from 'react-icons/lib/fa/edit'
import {postVote} from "../actions/Posts";


class Comments extends Component {

    deleteButton (commentId) {
        const { post } = this.props
        this.props.dispatch(
            deleteComment(commentId, () => {
                this.props.history.push(`/${post.category}/${post.id}`)
            })
        )
    }

    upVoteComment (commentId) {
        this.props.dispatch(voteComment(commentId, 'upVote'))
    }

    downVoteComment (commentId) {
        this.props.dispatch(voteComment(commentId, 'downVote'))
    }


    render() {
        const { post, comments } = this.props

        return (

                <div>
                        {comments &&
                            _.map(comments, comment => {
                                return (
                                    <div key={comment.id} className='post'>
                                        <div className='post-header'>Author - {comment.author}</div>
                                            <div className='post-content'>
                                                {comment.body}
                                            </div>
                                        <div className='post-footer'>
                                            <div>
                                                Votes: {comment.voteScore}
                                                <br/>
                                                <button
                                                    onClick={() => this.upVoteComment(comment.id)}
                                                >
                                                    <FaCaretUp size={30}/>
                                                </button>
                                                <button
                                                    onClick={() => this.downVoteComment(comment.id)}
                                                >
                                                    <FaCaretDown size={30}/>
                                                </button>

                                            </div>
                                            <div>
                                                Delete
                                                <br/>
                                                <button
                                                    onClick={() => this.deleteButton(comment.id)}
                                                >
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
                            )})

                        }
                </div>
            )
       }


}


export default withRouter(connect()(Comments))