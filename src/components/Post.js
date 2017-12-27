import React from 'react'
import FaCaretUp from 'react-icons/lib/fa/caret-up'
import FaCaretDown from 'react-icons/lib/fa/caret-down'
import FaTimesCircleO from 'react-icons/lib/fa/times-circle-o'
import FaStackExchange from 'react-icons/lib/fa/stack-exchange'
import {fetchComments} from "../actions/Comments";


export default function Post (props) {

        const { post } = props

        return (

            <div key={post.id} className='post'>
                <div className='post-header'>{post.title}</div>
                <div className='post-content'>
                    {post.body}
                </div>
                <div className='post-footer'>
                    <div>
                        Votes {post.voteScore}
                        <br/>
                        <button>
                            <FaCaretUp size={30}/>
                        </button>
                        <button>
                            <FaCaretDown size={30}/>
                        </button>

                    </div>
                    <div>
                        Comments
                        <br/>
                        {post.commentCount}
                        <button>
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





