import React, { Component} from 'react'
import Modal from 'react-modal'
import Comments from './Comments'
import { getComments} from "../utils/api_utils";
import { connect } from 'react-redux'
import FaCaretUp from 'react-icons/lib/fa/caret-up'
import FaCaretDown from 'react-icons/lib/fa/caret-down'
import FaTimesCircleO from 'react-icons/lib/fa/times-circle-o'
import FaStackExchange from 'react-icons/lib/fa/stack-exchange'
import FaPlusSquare from 'react-icons/lib/fa/plus-square'


class Post extends Component {


    state = {

        comments: [],
        commentsModalOpen: false,
    }

    fetchPostComments = (postId) => {

        getComments(postId)
            .then((comments) => {
                console.log(comments)
                this.setState({ comments, commentsModalOpen: true })
            })

        console.log(postId + ' = postId from inside post component')
    }

    openCommentsModal = () => this.setState(() => ({ commentsModalOpen: true }))
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
                        <button onClick={() => this.fetchPostComments(post.id)}>
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
                </div>

                <Modal
                    className = "modal"
                    overlayClassName = 'overlay'
                    isOpen = {this.state.commentsModalOpen}
                    onRequestClose = {this.closeCommentsModal}
                    contentLabel = 'Modal'
                >

                        {
                            this.state.comments.map((comment) => {
                                return (
                                    <Comments key={comment.id} comment={comment}/>
                                )
                            })
                        }

                    <div className="post">
                        <div className="post-content">
                            <FaPlusSquare size={40}/>
                        </div>
                    </div>



                </Modal>
            </div>





        )

    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, null)(Post)
