import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

class BookContainer extends Component {
  static propTypes = {
    booksList: PropTypes.array.isRequired,
    changeBookShelf: PropTypes.func.isRequired
  };

  state = { shelfChange: false };

  render() {
    const { booksList, changeBookShelf } = this.props;
    const shelfList = [
      { shelfType: 'currentlyReading', shelfName: 'Currently Reading' },
      { shelfType: 'wantToRead', shelfName: 'Want to Read' },
      { shelfType: 'read', shelfName: 'Read' }
    ];

    return (
      <div className="list-books-content">
        { shelfList.map((shelf, index) => {
          const shelfBooks = booksList.filter(book => book.shelf === shelf.shelfType);
          return (
            <div className="bookshelf" key={ index }>
              <h2 className="bookshelf-title">{ shelf.shelfName }</h2>
              <div className="bookshelf-books">
                <BookShelf booksList={ shelfBooks } changeBookShelf={ changeBookShelf } />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BookContainer;