import React, { Component} from 'react'
import { withRouter, Link } from 'react-router-dom'
import Modal from 'react-modal'
import Comments from './Comments'
import { fetchPostComments } from "../actions/Comments";
import { deletePost, postVote } from "../actions/Posts";
import _ from 'lodash'
import { connect } from 'react-redux'
import FaCaretUp from 'react-icons/lib/fa/caret-up'
import FaCaretDown from 'react-icons/lib/fa/caret-down'
import FaTimesCircleO from 'react-icons/lib/fa/times-circle-o'
import FaStackExchange from 'react-icons/lib/fa/stack-exchange'
import FaPlusSquare from 'react-icons/lib/fa/plus-square'
import FaEdit from 'react-icons/lib/fa/edit'



class Post extends Component {

    state = {
        commentsModalOpen: false
    }

   componentDidMount () {
       const { post } = this.props
       this.props.dispatch(fetchPostComments(post.id))
   }

   deleteButton (id) {
       this.props.dispatch(
           deletePost(id, () => {
               this.props.history.push('/')
           })
       )
   }

    upVotePost (PostId) {
        this.props.dispatch(postVote(PostId, 'upVote'))
    }

    downVotePost (PostId) {
        this.props.dispatch(postVote(PostId, 'downVote'))
    }


    closeCommentsModal = () => this.setState(() => ({commentsModalOpen: false}))

    render() {

        const { post, comments } = this.props

        let sortedComments = _.filter(comments, { parentId: post.id, deleted: false })
        console.log(sortedComments)


        return (

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

                <Modal
                    className = "modal"
                    overlayClassName = 'overlay'
                    isOpen = {this.state.commentsModalOpen}
                    onRequestClose = {this.closeCommentsModal}
                    contentLabel = 'Modal'
                >

                    { post.commentCount === 0 ? (
                        <div className="post">
                            <div className="post-content">
                                <h1>No Comments, Be the first!</h1>
                            </div>
                        </div>
                    )
                        :
                            _.map(sortedComments, comment => {
                                return (
                                    <Comments key={comment.id} comment={comment}/>
                                )
                            })
                        }
                    <div className="post">
                        <div className="post-content">
                            <button>
                                <FaPlusSquare size={40}/>
                            </button>
                        </div>
                    </div>
                </Modal>
            </div>
        )

    }
}

const mapStateToProps = ({ comments }) => {
    return {

        comments: comments.comments
    }
}


export default withRouter(connect(mapStateToProps)(Post))
