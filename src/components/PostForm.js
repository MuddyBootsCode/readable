import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { createPost, editPost, fetchPost } from "../actions/Posts";

const uuid = require('uuid/v4')

class PostForm extends Component {
    componentDidMount() {
        const { id } = this.props.match.params

        if (id) {
           const inboundPost =  this.props.fetchPost(id)
           console.log(inboundPost)
           this.handleInitialize(inboundPost)

        }
    }

    handleInitialize() {
        const { post } = this.props

        const initData = {
            title: post.title,
            author: post.author,
            category: post.category,
            body: post.body
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
                <div>
                    {touched
                        ? error
                        : ' ' }
                </div>
            </div>
        )
    }

    renderDropDown(field) {
        const { meta: { touched, error } } = field

        const className = `form-group ${touched && error ? 'has-danger' : ' '}`

        return (
            <div className={className}>
                <select {...field.input}>
                    <option>{field.placeholder}</option>
                    <option value="react">React</option>
                    <option value="redux">Redux</option>
                    <option value="udacity">Udacity</option>
                </select>
                <div>{touched ? error : ' '}</div>
            </div>
        )
    }

    onSubmit(values) {
        const { post } = this.props
        if (post) {
            values.id = post.id
            values.timestamp = Date.now()
            this.props.dispatch(
                editPost(values, () => {
                    this.props.history.push('/')
                })
            )
        } else {
            values.id = uuid()
            values.timestamp = Date.now()
            this.props.dispatch(
                createPost(values, () => {
                    this.props.history.push('/')

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
                        name="title"
                        placeholder="Title"
                        component={this.renderField}
                    />
                    <Field
                        name="author"
                        placeholder="Author"
                        component={this.renderField}
                    />
                    <Field
                        name="category"
                        placeholder="Select a category"
                        component={this.renderDropDown}
                    />
                    <Field
                        name="body"
                        placeholder="What is on your mind..."
                        component={this.renderField}
                    />
                    <button
                        type="submit"
                        disabled={submitting || invalid}
                        className
                    >
                        Submit
                    </button>
                </form>
                <button
                    onClick={this.props.history.goBack}
                    className=""
                >
                    back
                </button>
            </div>
        )
    }
}

function validate(values) {

    const errors = {}

    if (!values.title) {
        errors.title = 'Please enter a title for your post.'
    }
    if (!values.author) {
        errors.author = 'Please give us your name.'
    }
    if (!values.category) {
        errors.category = 'Please select a category.'
    }
    if (!values.body || values.body.lenght < 3) {
        errors.body = "Post's cannot be empty"
    }

    return errors

}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts.posts[ownProps.match.params.id] }
}

export default reduxForm({
    validate: validate,
    form: 'NewPostForm'
})(withRouter(connect(mapStateToProps, { fetchPost })(PostForm)))