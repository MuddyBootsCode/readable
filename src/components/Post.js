import React from 'react'

export default function Post (props) {

    return(
           <li key={props.post.id}>
            <div className='post'>
                <div className='post-header'>{props.post.title}</div>
                    <div className='post-content'>
                        {props.post.body}
                    </div>
                <div className='post-footer'></div>
            </div>
           </li>
        )
    }