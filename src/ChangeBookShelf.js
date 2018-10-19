import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChangeBookShelf extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        booksList: PropTypes.array.isRequired,
        changeBookShelf: PropTypes.func.isRequired
    };

    updateShelf = event => {
        this.props.changeBookShelf(this.props.book, event.target.value);
    }
  
    getShelfName = (booksList, book) => {
        for (let item of booksList) {
            if (item.id === book.id) {
                return item.shelf;
            }
        }
    }

    render() {
        const { book, booksList } = this.props;
        console.log('book '+ book);
        console.log('booklist '+ booksList);
        let currentShelf = this.getShelfName(booksList, book);

        return (
            <div className="book-shelf-changer">
                <select onChange={ this.updateShelf } defaultValue={ currentShelf }>
                <option value="none" disabled>
                    Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
                </select>
            </div>
        );
    }
}

export default ChangeBookShelf;