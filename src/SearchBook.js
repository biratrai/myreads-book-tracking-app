import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

class SearchBook extends Component {
  static propTypes = {
    bookList: PropTypes.array.isRequired,
    changeBookShelf: PropTypes.func.isRequired
  };

  state = {
    query: '',
    newBooks: [],
    searchErr: false
  };

  getBooks = event => {
    const query = event.target.value;
    this.setState({ query });

    // if user input => run the search
    if (query) {
      BooksAPI.search(query.trim(), 20).then(bookList => {
        bookList.length > 0
          ? this.setState({ newBooks: bookList, searchErr: false })
          : this.setState({ newBooks: [], searchErr: true });
      });

      // if query is empty => reset state to default
    } else this.setState({ newBooks: [], searchErr: false });
  };

  render() {
    const { query, newBooks, searchErr } = this.state;
    const { bookList, changeBookShelf } = this.props;

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
              value={query}
              onChange={this.getBooks}
            />
          </div>
        </div>
        <div className="search-books-results">
          {newBooks.length > 0 && (
            <div>
              <h3>Search returned {newBooks.length} books </h3>
              <ol className="books-grid">
                {newBooks.map(book => (
                  <Book
                    book={book}
                    bookList={bookList}
                    key={book.id}
                    changeBookShelf={ changeBookShelf }
                  />
                ))}
              </ol>
            </div>
          )}
          {searchErr && (
            <h3>Search did not return any books. Please try again!</h3>
          )}
        </div>
      </div>
    );
  }
}
export default SearchBook;