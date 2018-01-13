import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import { fetchPosts, deletePost, postVote} from "../actions/Posts"
import FaCaretUp from 'react-icons/lib/fa/caret-up'
import FaCaretDown from 'react-icons/lib/fa/caret-down'
import FaTimesCircleO from 'react-icons/lib/fa/times-circle-o'
import FaStackExchange from 'react-icons/lib/fa/stack-exchange'
import FaPlusSquare from 'react-icons/lib/fa/plus-square'
import FaEdit from 'react-icons/lib/fa/edit'


class DetailView extends Component {
    render(){
        return (
            <div className="wrapper">
                <div className="box navbox">
                    <div className="nav">
                        <div><a href="">All</a></div>
                        <div><a href="">Udacity</a></div>
                        <div><a href="">React</a></div>
                        <div><a href="">Redux</a></div>
                    </div>
                </div>
                <div className="vbox"></div>
                <div className="title-box">R</div>
                <div className="letter-box title-box2">eadable</div>
                <div className="content-location">
                    <div className="post-box">

                        <div className="post">
                            <div className="post-content">
                                <button onClick={() => this.setState({postModalOpen: true})}>
                                    <FaPlusSquare size={40}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(){

}

export default connect(mapStateToProps)(DetailView)