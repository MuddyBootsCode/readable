import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, NavLink, Link } from 'react-router-dom'
import { fetchCategories } from '../actions/Categories'
import FaClockO from 'react-icons/lib/fa/clock-o'
import FaThumbsDown from 'react-icons/lib/fa/thumbs-down'
import {selectSortValue} from "../actions/Posts";

class NavMenu extends Component {
    componentWillMount() {
        this.props.fetchCategories()
    }

    sortByPopularity(){
        this.props.selectSortValue('popularity')
    }

    sortByDate(){
        this.props.selectSortValue('latest')
    }

    render() {
        return (
            <div className="nav">
                <NavLink exact to="/" activeStyle={{textDecoration: 'underline', fontSize: '2.5em', color: 'white'}}>
                    All
                </NavLink>
                {this.props.categories &&
                this.props.categories.map(category => (
                    <div>
                        <Link
                            to={category.name}
                            key={category.name}
                        >
                            {category.name}
                        </Link>
                    </div>
                ))}

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
