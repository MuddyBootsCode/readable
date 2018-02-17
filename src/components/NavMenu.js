import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, NavLink } from 'react-router-dom'
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
                <div className="nav-links">
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
                </div>

                <div className="sort-buttons">
                        &nbsp;
                    <span>Sort By</span>
                        &nbsp;
                        <br/>
                        &nbsp;
                    <button onClick={() => this.sortByDate()}>
                        <FaClockO color='white' size={30}/>
                    </button>
                        <br/>
                        &nbsp;
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

export default withRouter(connect(mapStateToProps, { selectSortValue })(NavMenu))
