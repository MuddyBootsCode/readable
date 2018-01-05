import React, { Component} from 'react'
import Modal from 'react-modal'
import { fetchComments } from '../actions/Comments'
import { connect } from 'react-redux'
import FaCaretUp from 'react-icons/lib/fa/caret-up'
import FaCaretDown from 'react-icons/lib/fa/caret-down'
import FaTimesCircleO from 'react-icons/lib/fa/times-circle-o'
import FaStackExchange from 'react-icons/lib/fa/stack-exchange'


class Post extends Component {


    state = {

        commentsModalOpen: false ,
    }

    fetchPostComments = (postId) =>{
        fetchComments(postId)
        console.log(postId + ' from inside posts')
    }

    // componentwillMount(comments){
    //     const {} = this.props
    //
    // }



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
            </div>

        )

    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments.comments,
        fetching: state.comments.fetching
    }
}
const mapDispatchToProps = ({fetchComments})
export default connect(mapStateToProps, mapDispatchToProps)(Post)

