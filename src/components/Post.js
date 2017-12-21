import React from 'react'

export default function Post (props) {

    const { post } = props

    return(

            <div key={post.id} className='post'>
                <div className='post-header'>{post.title}</div>
                    <div className='post-content'>
                        {post.body}
                    </div>
                <div className='post-footer'>Votes {post.voteScore} Comments {post.commentCount} Delete! </div>
            </div>

        )
    }