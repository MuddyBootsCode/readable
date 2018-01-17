import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, NavLink, Link } from 'react-router-dom'
import { fetchCategories } from '../actions/Categories'
import FaClockO from 'react-icons/lib/fa/clock-o'
import FaThumbsDown from 'react-icons/lib/fa/thumbs-down'
import {selectSortValue} from "../actions/Posts";

class NavMenu extends Component {

    sortByPopularity(){
        this.props.selectSortValue('popularity')
    }

    sortByDate(){
        this.props.selectSortValue('latest')
    }

    render() {
        return (
            <div className="nav">
                <NavLink exact to="/" activeStyle={{textDecoration: 'underline', fontSize: '2em', color: 'red'}}>
                    All
                </NavLink>
                <NavLink exact to="/react" activeStyle={{textDecoration: 'underline', fontSize: '2em', color: 'red'}}>
                    React
                </NavLink>
                <NavLink exact to="/redux" activeStyle={{textDecoration: 'underline', fontSize: '2em', color: 'red'}}>
                    Redux
                </NavLink>
                <NavLink exact to="/udacity" activeStyle={{textDecoration: 'underline', fontSize: '2em', color: 'red'}}>
                    Udacity
                </NavLink>

                <div className="sort-buttons">

                    <span>Sort By</span>

                    <button onClick={() => this.sortByDate()}>
                        <FaClockO color='white' size={30}/>
                    </button>
                    <button onClick={() => this.sortByPopularity()}>
                        <FaThumbsDown color='white' size={30}/>
                    </button>
                </div>

            </div>
        )
    }
}

function mapStateToProps({ categories }) {
    return {
        categories: categories.categories.categories
    }
}

export default withRouter(connect(mapStateToProps, { fetchCategories, selectSortValue })(NavMenu))
