import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

class SearchBook extends Component {
  static propTypes = {
    booksList: PropTypes.array.isRequired,
    changeBookShelf: PropTypes.func.isRequired
  };

  state = {
    query: '',
    searchBookList: [],
    searchError: false
  };

  getBooks = event => {
    const query = event.target.value;
    this.setState({ query });

    // if user input => run the search
    if (query) {
      BooksAPI.search(query.trim(), 20).then(booksList => {
        booksList.length > 0
          ? this.setState({ searchBookList: booksList, searchError: false })
          : this.setState({ searchBookList: [], searchError: true });
      });

      // if query is empty => reset state to default
    } else this.setState({ searchBookList: [], searchError: false });
  };

  render() {
    const { query, searchBookList, searchError } = this.state;
    const { booksList, changeBookShelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={ query }
              onChange={ this.getBooks }
            />
          </div>
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