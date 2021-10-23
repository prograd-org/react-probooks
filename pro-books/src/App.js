import React, { Component } from 'react'
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './components/Search';
import axios from 'axios'


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      obj: { type: "", id: "" }
    }
  }

  componentDidMount = () => {
    let api = "https://reactnd-books-api.udacity.com/books";
    let token;
    if (!token) {
      token = localStorage.token = Math.random().toString(36).substr(-8)
    }
    const headers = {
      'Accept': 'application/json',
      'Authorization': token
    }
    axios.get(api, { headers })
      .then((res) => {
        let newBooks = []
        res.data.books.forEach((book) => {
          let obj = { id: book.id, title: book.title, author: book.authors[0], img: book.imageLinks.thumbnail, type: "all" }
          newBooks.push(obj)
        })
        this.setState({
          books: [...newBooks]
        })
        console.log(this.state.books);
      })
      .catch(err => {
        console.log(err);
      })
  }

  setBookSearch = (e) => {
    let newObj = this.state.obj
    newObj.type = e.type
    newObj.id = e.id
    this.setState({
      obj: newObj
    })
    console.log(this.state.obj);
  }

  render() {
    if (this.state.books.length === 0) {
      return (
        <div className="load">
          <img src="https://raw.githubusercontent.com/AaryanShaikh/react-probooks/main/pro-books/src/res/load.gif" alt="loading" />
        </div>
      );
    }
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/"><Home books={this.state.books} sobj={this.state.obj} /></Route>
            <Route path="/search"><Search books={this.state.books} type={this.setBookSearch} /></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
