import React, { Component } from 'react';
import PropTypes from 'prop-types';
import defaultCover from './images/book-placeholder.png'
import ChangeBookShelf from './ChangeBookShelf';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    booksList: PropTypes.array.isRequired,
    changeBookShelf: PropTypes.func.isRequired
  };

  render() {
    const { book, booksList, changeBookShelf } = this.props;

    // Using the default cover for book and default title when unavailable
    const bookImage =
      book.imageLinks && book.imageLinks.thumbnail
        ? book.imageLinks.thumbnail
        : defaultCover;
    const title = book.title ? book.title : 'Title unavailable';

    return (
      <li>
        <div className="book">
          <div className="book-top"
              style={{ backgroundImage: `url(${ bookImage })` }}>
            <ChangeBookShelf book={ book } booksList={ booksList } changeBookShelf={ changeBookShelf } />
          </div>
           
          <div className="book-title">{ title }</div>
          { book.authors &&
            book.authors.map((author, index) => (
              <div className="book-authors" key={ index }>
                { author }
              </div>
            ))}
        </div>
      </li>
    );
  }
}

export default Book;