import React, { Component } from 'react'
import Book from './Book'
import { Link } from 'react-router-dom';


export default class Home extends Component {
    render() {
        return (
            <>
                <header>ProBook</header>
                <div className="home-cont">
                    <h1>Reading</h1>
                    <hr />
                    <div className="read">
                        {
                            this.props.books.map((book) => {
                                return <Book
                                    title={book.title}
                                    author={book.authors[0]}
                                    img={book.imageLinks.thumbnail}
                                />
                            })
                        }
                    </div>
                    <h1>Like</h1>
                    <hr />
                    <div className="like">

                    </div>
                    <h1>Dislike</h1>
                    <hr />
                    <div className="dislike">
                    </div>

                </div>
                <Link to="/search" className="search-btn">+</Link>
            </>
        )
    }
}
