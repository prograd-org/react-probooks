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
      books: []
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
        this.setState({
          books: res.data.books
        })
        console.log(res.data.books);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    if (this.state.books.length === 0) {
      return null
    }
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/"><Home books={this.state.books} /></Route>
            <Route path="/search"><Search /></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
