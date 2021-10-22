import React, { Component } from 'react'
import Book from './Book'
import { Link } from 'react-router-dom';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allBooks: this.props.books,
            readBooks: [],
            likeBooks: [],
            dislikeBooks: [],
            bookId: []
        }
    }
    getBook = (type, id) => {
        let selBook
        if (type === "like") {
            selBook = this.state.likeBooks.filter((book) => {
                return book.id === id;
            })
            this.state.likeBooks.splice(this.state.likeBooks.findIndex(bk => bk.id === id), 1)
        } else if (type === "dislike") {
            selBook = this.state.dislikeBooks.filter((book) => {
                return book.id === id;
            })
            this.state.dislikeBooks.splice(this.state.dislikeBooks.findIndex(bk => bk.id === id), 1)
        } else {
            selBook = this.state.allBooks.filter((book) => {
                return book.id === id;
            })
            this.state.allBooks.splice(this.state.allBooks.findIndex(bk => bk.id === id), 1)
        }
        return selBook
    }
    setBooks = (e) => {
        // first put into book id then check bookid
        console.log(`move to ${e.type} book id ${e.id}`);
        if (e.type !== "delete") {
    /*2*/   let type = (this.state.bookId.length === 0) ? "non" : this.state.bookId[this.state.bookId.findIndex(bk => bk.id === e.id)].type
            if (e.type === "like") {
                let selBook = this.getBook(type, e.id)
        /*1*/    let obj = { id: e.id, type: "like" }
                this.setState({
                    likeBooks: [...this.state.likeBooks, selBook[0]],
                    bookId: [...this.state.bookId, obj]
                })
            } else if (e.type === "dislike") {
                let selBook = this.getBook(type, e.id)
                let obj = { id: e.id, type: "dislike" }
                this.setState({
                    dislikeBooks: [...this.state.dislikeBooks, selBook[0]],
                    bookId: [...this.state.bookId, obj]
                })
            }
        } else {
            let type = this.state.bookId[this.state.bookId.findIndex(bk => bk.id === e.id)].type
            if (type === "like") {
                let selBook = this.state.likeBooks.filter((book) => {
                    return book.id === e.id;
                })
                this.state.likeBooks.splice(this.state.likeBooks.findIndex(bk => bk.id === e.id), 1)
                this.setState({
                    allBooks: [...this.state.allBooks, selBook[0]]
                })

            } else if (type === "dislike") {
                let selBook = this.state.dislikeBooks.filter((book) => {
                    return book.id === e.id;
                })
                this.state.dislikeBooks.splice(this.state.dislikeBooks.findIndex(bk => bk.id === e.id), 1)
                this.setState({
                    allBooks: [...this.state.allBooks, selBook[0]]
                })
            }
            this.state.bookId.splice(this.state.bookId.findIndex(bk => bk.id === e.id), 1)
        }
    }
    render() {
        return (
            <>
                <header>ProBook</header>
                <div className="home-cont">
                    <h1>Reading</h1>
                    <hr />
                    <div className="read">
                        {
                            this.state.allBooks.map((book) => {
                                return <Book key={book.id}
                                    title={book.title}
                                    author={book.authors[0]}
                                    img={book.imageLinks.thumbnail}
                                    id={book.id}
                                    setBook={this.setBooks}
                                />
                            })
                        }
                    </div>
                    <h1>Like</h1>
                    <hr />
                    <div className="like">
                        {
                            this.state.likeBooks.length === 0 ?
                                "No Books Liked"
                                :
                                this.state.likeBooks.map((book) => {
                                    return <Book key={book.id}
                                        title={book.title}
                                        author={book.authors[0]}
                                        img={book.imageLinks.thumbnail}
                                        id={book.id}
                                        setBook={this.setBooks}
                                    />
                                })
                        }
                    </div>
                    <h1>Dislike</h1>
                    <hr />
                    <div className="dislike">
                        {
                            this.state.dislikeBooks.length === 0 ?
                                "No Books Disliked"
                                :
                                this.state.dislikeBooks.map((book) => {
                                    return <Book key={book.id}
                                        title={book.title}
                                        author={book.authors[0]}
                                        img={book.imageLinks.thumbnail}
                                        id={book.id}
                                        setBook={this.setBooks}
                                    />
                                })
                        }
                    </div>

                </div>
                <Link to="/search" className="search-btn">+</Link>
            </>
        )
    }
}
