import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI';
import { DebounceInput } from 'react-debounce-input';

class SearchBook extends Component {
  static propTypes = {
    booksList: PropTypes.array.isRequired,
    changeBookShelf: PropTypes.func.isRequired
  };

  state = {
    userSearchText: '',
    searchBookList: [],
    searchError: false
  };

  // Function to handle the user search text 
  getBooks = event => {
    const userSearchText = event.target.value;
    this.setState({ userSearchText });

    // if user input availble fetch the data
    if (userSearchText) {
      this.searchBook(userSearchText);
    } else {
      // set search to empty state
      this.setState({ searchBookList: [], searchError: false });
    }
  };

  // Function to get list of books when user search input is available
  searchBook = ( userSearchText ) => {
    BooksAPI.search(userSearchText.trim(), 20).then(booksList => {
      booksList.length > 0
        ? this.setState({ searchBookList: booksList, searchError: false })
        : this.setState({ searchBookList: [], searchError: true });
    });
  }

  render() {
    const { userSearchText, searchBookList, searchError } = this.state;
    const { booksList, changeBookShelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <DebounceInput
            minLength= {2}
            debounceTimeout={300}
            onChange={ this.getBooks }
            value={ userSearchText }
            placeholder="Search by title or author"
            element="input" 
            style={{flex: "1", fontSize: "1.25em"}}/>
        </div>
        <div className="search-books-results">
          { searchBookList.length > 0 && (
            <div>
              <h3>Search returned { searchBookList.length } books </h3>
              <ol className="books-grid">
                { searchBookList.map(book => (
                  <Book
                    book={ book }
                    booksList={ booksList }
                    key={ book.id }
                    changeBookShelf={ changeBookShelf }
                  />
                ))}
              </ol>
            </div>
          )}
          { searchError && (
            <h3>No books found. Please search again!</h3>
          )}
        </div>
      </div>
    );
  }
}
export default SearchBook;