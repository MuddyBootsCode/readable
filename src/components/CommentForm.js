import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { createComment, editComment, fetchSingleComments } from "../actions/Comments";

const uuid = require('uuid/v4')

class CommentForm extends Component {
    render(){
        return(

        )
    }
}

export default reduxForm({
    validate: validate,
    form: 'CommentForm'
})(withRouter(connect(mapStateToProps, { fetchComment })(CommentNewEdit)))