import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

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
            {/* <Button variant="fab"  aria-label="Add">  */}
                {/* <Icon>keyboard_arrow_down</Icon> */}
                <select onChange={ this.updateShelf } defaultValue={ currentShelf }>
                <option value="none" disabled>
                    Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
                </select>
                {/* </Button> */}
            </div>
        );
    }
}

export default ChangeBookShelf;