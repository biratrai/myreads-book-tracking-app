import React, { Component } from 'react';
import PropTypes from 'prop-types';
import defaultCover from './images/book-placeholder.png'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    booksList: PropTypes.array.isRequired,
    changeBookShelf: PropTypes.func.isRequired
  };

  render() {
    const { book, booksList, changeBookShelf } = this.props;

    // add fallbacks for missing cover images and title
    const bookImage =
      book.imageLinks && book.imageLinks.thumbnail
        ? book.imageLinks.thumbnail
        : defaultCover;
    const title = book.title ? book.title : 'Title unavailable';

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{ backgroundImage: `url(${bookImage})`,
              backgroundSize: 'cover',
              overflow: 'hidden' }}
            />
          </div>
          <div className="book-title">{title}</div>
          {/* Check for authors and render each on separate line if exist*/
          book.authors &&
            book.authors.map((author, index) => (
              <div className="book-authors" key={index}>
                {author}
              </div>
            ))}
        </div>
      </li>
    );
  }
}

export default Book;