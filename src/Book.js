import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import defaultCover from './images/book-placeholder.png'
import ChangeBookShelf from './ChangeBookShelf';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

class Book extends Component {
    
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
        <Card style={{ maxWidth: 345 }}>
            <CardMedia
                style={{ height: 200, objectFit: 'cover' }}
                image={ bookImage }>
            </CardMedia>
            
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">{ title }</Typography>
            </CardContent>
            { book.authors &&
                book.authors.map((author, index) => (
                    <CardContent>
                    <Typography component="p">
                    { author }
                    </Typography>
                </CardContent>
                ))}
        <ChangeBookShelf book={ book } booksList={ booksList } changeBookShelf={ changeBookShelf } />
        </Card>
      </li>
    );
  }
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    booksList: PropTypes.array.isRequired,
    changeBookShelf: PropTypes.func.isRequired
};

export default (Book);