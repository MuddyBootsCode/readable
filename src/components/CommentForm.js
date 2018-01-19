import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, NavLink } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import FaCheck from 'react-icons/lib/fa/check'
import FaTimesCircleO from 'react-icons/lib/fa/times-circle-o'
import Navmenu from './NavMenu'

import { createComment, editComment, fetchSingleComments } from '../actions/Comments'

const uuid = require('uuid/v4')

class CommentForm extends Component {
    componentDidMount() {
        const { commentId } = this.props.match.params

        if (commentId) {
            const inboundComment = this.props.fetchSingleComments(commentId)
            this.handleInitialize(inboundComment)
        }
    }

    handleInitialize() {
        const { comment } = this.props
        const initData = {
            author: comment.author,
            body: comment.body
        }
        this.props.initialize(initData)
    }

    renderField(field) {
        const { meta: { touched, error } } = field

        const className = `form-group ${touched && error ? 'has-danger' : ' '}`

        return (
            <div className={className}>
                <input
                    {...field.input}
                    type="text"
                    placeholder={field.placeholder}
                    className="form-control"

                />
                <div>{touched ? error : ' '}</div>
            </div>
        )
    }

    onSubmit(values) {
        const { post, comment } = this.props
        if (comment) {
            values.id = comment.id
            values.parentId = post.id
            values.timestamp = Date.now()
            this.props.dispatch(
                editComment(values, () => {
                    this.props.history.push(`/${post.category}/${post.id}`)
                })
            )
        } else {
            values.id = uuid()
            values.parentId = post.id
            values.timestamp = Date.now()
            this.props.dispatch(
                createComment(values, () => {
                    this.props.history.push(`/${post.category}/${post.id}`)
                })
            )
        }
    }

    render() {
        const { handleSubmit, submitting, invalid } = this.props

        return (
            <div className="wrapper">
                <div className="box navbox">
                   <Navmenu/>
                </div>
                    <div className="vbox"></div>
                    <div className="title-box">R</div>
                    <div className="letter-box title-box2">eadable</div>
                    <div className="content-location">

                        <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="comment-form">

                            <div className="post-box">
                                <div className="comment">
                                    <div className="comments-header">
                                        Author:
                                        <Field
                                        className="comments-author-field"
                                        name="author"
                                        placeholder="Author"
                                        component={this.renderField}
                                        />
                                    </div>
                                    <div className="comment-content">
                                        Comment:
                                        <Field
                                            className="comments-body-field"
                                            name="body"
                                            placeholder="What is on your mind..."
                                            component={this.renderField}
                                        />
                                    </div>
                                    <div className="comment-footer">
                                        <button
                                            type="submit"
                                            disabled={submitting || invalid}
                                            className="button"
                                        >
                                            Submit
                                            <FaCheck size={30}/>
                                        </button>
                                        <button
                                            onClick={this.props.history.goBack}
                                            className="postLink"
                                        >
                                            back
                                            <FaTimesCircleO size={30}/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
            </div>
        )
    }
}

function validate (values) {
    const errors = {}

    if (!values.author) {
        errors.author = "Please tell us who you are, it's nice to know that sort of thing"
    }
    if (!values.body || values.body.length < 3) {
        errors.body = 'You need to leave a comment, and it has to be longer than that.'
    }
    return errors
}

function mapStateToProps({ posts, comments }, ownProps) {
    return {
        post: posts.posts[ownProps.match.params.id],
        comment: comments.comments[ownProps.match.params.commentId]
    }
}
export default reduxForm({
    validate: validate,
    form: 'CommentForm'
})(withRouter(connect(mapStateToProps, { fetchSingleComments })(CommentForm)))
