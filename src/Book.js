import React, { Component } from 'react';
import PropTypes from 'prop-types';
import defaultCover from './icons/add.svg'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  };

  render() {
    const { book, books, changeShelf } = this.props;

    // add fallbacks for missing cover images and title
    const coverImg =
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
              style={{ backgroundImage: `url(${coverImg})` }}
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