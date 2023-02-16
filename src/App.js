import React, { Component } from "react";
import Movie from "./components/movie";
import "bootstrap";

class App extends Component {

  state = {
    movies: [
      {id: 1,title: "Terminator",genre: "Action",stock: 6,rate: 2.5,isLiked: true},
      {id: 2,title: "Die Hard",genre: "Action",stock: 5,rate: 2.5,isLiked: false},
      {id: 3,title: "Get Out",genre: "Thriller",stock: 8,rate: 3.5,isLiked: false},
      {id: 4,title: "Trip to Italy",genre: "Comedy",stock: 6,rate: 2.6,isLiked: false},
    ]
  };

  handleLiked = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = {...movies[index]}
    movies[index].isLiked = !movies[index].isLiked;
    this.setState({movies})
  };

  render(){
    return (<Movie moviesData={this.state.movies} onLiked={this.handleLiked} onDisliked={this.handleDisliked} />);
  }
};

export default App;
