import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, NavLink } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import FaCheck from 'react-icons/lib/fa/check'
import FaTimesCircleO from 'react-icons/lib/fa/times-circle-o'

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
                    <div className="nav">
                        <div><NavLink exact to="/" activeStyle={{textDecoration: 'underline', fontSize: '2.5em', color: 'white'}}>All</NavLink></div>
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
                        <div className="comment">
                            <div className="form-wrapper">
                                <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="comment-form">
                                    <div className="comment-content">
                                        Author:
                                        <div className="comment-author-field">
                                            <Field
                                                name="author"
                                                placeholder="Author"
                                                component={this.renderField}
                                            />
                                        </div>
                                        Body:
                                        <div className="comment-body-field">
                                            <Field
                                                name="body"
                                                placeholder="What is on your mind..."
                                                component={this.renderField}
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={submitting || invalid}
                                            className="button"
                                        >
                                            Submit
                                            <FaCheck size={30}/>
                                        </button>
                                    </div>
                                </form>
                                    <div className="post-footer">
                                        <button
                                            onClick={this.props.history.goBack}
                                            className="btn btn-secondary"
                                        >
                                            back
                                            <FaTimesCircleO size={30}/>
                                        </button>
                                    </div>

                            </div>
                        </div>
                    </div>
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
