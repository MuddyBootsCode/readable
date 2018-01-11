import React, { Component} from 'react'
import Modal from 'react-modal'
import Comments from './Comments'
import { fetchPostComments} from "../actions/Comments";
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

   componentDidMount() {
       const { post, dispatch } = this.props
       dispatch(fetchPostComments(post.id))
   }


    closeCommentsModal = () => this.setState(() => ({commentsModalOpen: false}))

    render() {

        const { post } = this.props

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
                        <button>
                            <FaCaretUp size={30}/>
                        </button>
                        <button>
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
                        <button>
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
                        {
                            _.map(this.props.comments, comment => {
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

export default connect(mapStateToProps)(Post)
