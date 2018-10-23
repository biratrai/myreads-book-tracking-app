import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

// Stateless functional Component
const BookShelf = ({ booksList, changeBookShelf }) => {
    // Return list of Book component
    return (
      <ol className="books-grid">
        { booksList.map(book => (
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

BookShelf.propTypes = {
  booksList: PropTypes.array.isRequired,
  changeBookShelf: PropTypes.func.isRequired
};
export default BookShelf;