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
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';

class Book extends Component {
  
  render() {
    
    const { book, booksList, changeBookShelf } = this.props;
    
    const bookTopStyle = { 
      position: 'relative',
      height: '200px',
      display: 'flex',
      alignItems: 'flex-end',
      backgroundSize: 'cover'
    }

    const bookStyle = {
      width: '140px'
    }
    const bookTitleAndAuthors = {
      fontSize: '0.8em'
    }

    const bookTitle = {
      marginTop: '10px'
    }
    // Using the default cover for book and default title when unavailable
    const bookImage =
      book.imageLinks && book.imageLinks.thumbnail
        ? book.imageLinks.thumbnail
        : defaultCover;
    const title = book.title ? book.title : 'Title unavailable';

    return (
      <li>
        <Card style={ bookStyle }>
        <CardActionArea>
          <CardMedia
              style={ bookTopStyle}
              image={ bookImage }>
          </CardMedia>
          
          <CardContent style={ [bookTitle ,bookTitleAndAuthors]}>
              <Typography >{ title }</Typography>
          </CardContent>
          { book.authors &&
              book.authors.map((author, index) => (
                  <CardContent style={ bookTitleAndAuthors }>
                  <Typography component="p">
                  { author }
                  </Typography>
              </CardContent>
              ))}
          </CardActionArea>
          <CardActions>
          <ChangeBookShelf book={ book } booksList={ booksList } changeBookShelf={ changeBookShelf } />
          </CardActions>
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