import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'

import { createComment, editComment, fetchSingleComments } from '../actions/Comments'

const uuid = require('uuid/v4')

class CommentForm extends Component {
    componentDidMount() {
        const { commentId } = this.props.match.params

        if (commentId) {
            const comment = this.props.fetchSingleComments(commentId)
            this.handleInitialize(comment)
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
                <div className="form-wrapper">
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field
                            name="author"
                            placeholder="Author"
                            component={this.renderField}
                        />

                        <Field
                            name="body"
                            placeholder="What is on your mind..."
                            component={this.renderField}
                        />
                        <button
                            type="submit"
                            disabled={submitting || invalid}
                            className="btn btn-primary"
                        >
                            Submit
                        </button>
                        </form>
                        <button
                            onClick={this.props.history.goBack}
                            className="btn btn-secondary"
                        >
                            back
                        </button>
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
