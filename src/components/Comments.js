import React, { Component } from 'react'
import FaCaretUp from 'react-icons/lib/fa/caret-up'
import FaCaretDown from 'react-icons/lib/fa/caret-down'
import FaTimesCircleO from 'react-icons/lib/fa/times-circle-o'


class Comments extends Component {

    render () {

        const { comment } = this.props

        return (
            <div key={comment.id} className='post'>
                <div className='post-header'>{comment.author}</div>
                <div className='post-content'>
                    {comment.body}
                </div>
                <div className='post-footer'>
                    <div>
                        Votes: {comment.voteScore}
                        <br/>
                        <button>
                            <FaCaretUp size={30}/>
                        </button>
                        <button>
                            <FaCaretDown size={30}/>
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

export default Comments