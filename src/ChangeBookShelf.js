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
  
    // Function to get the matching shelf
    getShelfName = (booksList, book) => {
        let defaultShelf = "none"
        for (let item of booksList) {
            if (item.id === book.id) {
                defaultShelf = item.shelf;
            }
        }
        return defaultShelf;
    }

    render() {
        const { book, booksList } = this.props;
        let currentShelf = this.getShelfName(booksList, book);

        return (
            <div className="book-shelf-changer">
                <select onChange={ this.updateShelf } defaultValue={ currentShelf }>
                    <option disabled>
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