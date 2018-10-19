import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookContainer from './BookContainer';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom';
import SearchBook from './SearchBook'

class BooksApp extends React.Component {
  state = {
    booksList: []
  }

  componentDidMount() {
    // get books on load
    BooksAPI.getAll().then(booksList => {
      this.setState({ booksList })
    });
  }

  // Callback function to update the book
  changeBookShelf = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf).then(response => {
      // set shelf for new or updated book
      changedBook.shelf = shelf;
      // update state with changed book
      this.setState(prevState => ({
        booksList: prevState.booksList
          // remove updated book from array
          .filter(book => book.id !== changedBook.id)
          // add updated book to array
          .concat(changedBook)
      }));
    });
  };

   
  render() {
    const Search = ({ history }) => (
      <SearchBook bookList={ this.state.bookList } changeShelf={ this.changeShelf } />
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
          <Route exact path="/home"
            render= { MainBookContainer }
            />
        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default BooksApp
