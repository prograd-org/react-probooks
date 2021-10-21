import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

export default class Search extends Component {
    render() {
        return (
            <>
                <div className="search-head">
                    <Link to="/">&lt;-</Link>
                    <input type="text" placeholder="Search by title or author" />
                </div>
                <div className="search-res">
                    <Book />
                </div>
            </>
        )
    }
}
