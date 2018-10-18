import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookShelf extends Component {
  static propTypes = {
    booksList: PropTypes.array.isRequired,
    changeBookShelf: PropTypes.func.isRequired
  };

  render() {
    const { booksList, changeBookShelf } = this.props;

    return (
      <ol className="books-grid">
        {booksList.map(book => (
          <Book
            book={ book }
            booksList={ booksList }
            key={ book.id }
            changeBookShelf={ changeBookShelf }
          />
        ))}
      </ol>
    );
  }
}

export default BookShelf;