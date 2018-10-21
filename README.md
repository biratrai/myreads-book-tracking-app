# MyReads

---

## Project Purpose:

This project was built for the Google Scholarship for Udacity FrontEnd Nanodegree Program. The project is uses [Create React App](https://github.com/facebookincubator/create-react-app) to bootstrap the project.

## Demo of the App

You can run a heroku hosted version of the app at [https://udacity-my-reads.herokuapp.com/](https://udacity-my-reads.herokuapp.com/)

## How to Load the App
The project uses Node.js and the [Create React App](https://github.com/facebookincubator/create-react-app). 

Download node: [Node.js](https://nodejs.org/en/)

Once Node is installed, navigate to the directory where you want to store the app

```
>> git clone https://github.com/biratrai/myreads-book-tracking-app.git
>> npm install
```

Once all of the dependencies have been installed you can launch the app by

```
>> npm start
```

A new browser window automatically loads displaying the app. If it doesn't, navigate to [http://localhost:3000/](http://localhost:3000/) in your browser

![Demo Screen](src/screenshots/app.png "Demo screen")

## How to Use the App

- Books are sorted into three shelf: Currently Reading, Want to Read and Read
- To change a book's shelf or remove a book from the shelf, click on the green button on the book cover
  ![Change menu](src/screenshots/shelfchange.png "shelf change")

- To add new books or search for books, click on the + button at the bottom of the page.
  Enter an author's name or subject. Items will be returned.

_Note: The backend API is limited to a fixed set of [search terms](#search-terms) -- see below for valid search options_

![Search Screen](src/screenshots/search-books.png "search")

### Resources and Documentation:

- [Create-react-app Documentation](https://github.com/facebookincubator/create-react-app)
- [React Training/React Router](https://github.com/ReactTraining/react-router)

- [Project starter template](https://github.com/udacity/reactnd-project-myreads-starter)
- [Project Rubric](https://review.udacity.com/#!/rubrics/918/view)
- [Udacity CSS Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/css.html)
- [Udacity HTML Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/index.html)
- [Udacity JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)
