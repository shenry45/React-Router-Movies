import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: [],
      id: undefined
    };
  }

  addToSavedList = (movie, id) => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList
          list={this.state.savedList}
          id={this.state.id} 
        />
        <Route
          path="/movies/:id"
          render={(props) => (
            <Movie 
              addToSavedList={this.addToSavedList}
              match={props.match}
            />)}
          exact
        />
        <Route path="/" component={MovieList} exact />
      </div>
    );
  }
}
