import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookContainer from './BookContainer';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom';
import SearchBook from './SearchBook'
import PageNotFound from './PageNotFound'

class BooksApp extends React.Component {
  state = {
    booksList: []
  }

  componentDidMount() {
    // get books when component is loaded
    BooksAPI.getAll().then(booksList => {
      this.setState({ booksList })
    });
  }

  // Function to update the book when book shelf is changed
  changeBookShelf = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf)
      .then(() => {
      // Updating the book to new shelf
      changedBook.shelf = shelf;
      // Set the state
      this.setState(prevState => ({
        booksList: prevState.booksList
          // removing the updated book
          .filter(book => book.id !== changedBook.id)
          // adding the updated book 
          .concat(changedBook)
      }));
    });
  };
   
  render() {
    const Search = () => (
      <SearchBook booksList={ this.state.booksList } changeBookShelf={ this.changeBookShelf } />
    )

    const MainBookContainer = () => (
      <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <BookContainer booksList={ this.state.booksList } changeBookShelf={ this.changeBookShelf }/>
      <div className="open-search">
        <Link to="/search">Search</Link>
      </div>
      </div>
    )

    return (
      <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/search"
            render={ Search }
          />
          <Route exact path="/"
            render= { MainBookContainer }
            />
        <Route component={ PageNotFound } />
        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default BooksApp
