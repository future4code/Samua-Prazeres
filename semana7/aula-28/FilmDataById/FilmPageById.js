import React from "react";
import axios from "axios";

export default class FilmPageById extends React.Component {
  state = {
    films: [],
  };

  ghibliLib = async () => {
    try {
      const response = await axios.get(`https://ghibliapi.herokuapp.com/films`);
      console.log(response.data);
      this.setState({ films: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  getMovieData = () => {
    this.setState({
      render() {
        const filmList = this.state.films.map((film) => {
          return (
            <div key={film.id}>
              <p>film name: {film.title}</p>
              <p>runtime: {film.running_time} mins</p>
              <p>release date: {film.release_date}</p>
              <p>director: {film.director}</p>
              <p>sinopsis: {film.description}</p>
              <hr />
            </div>
          );
        });

        /* return (
          <div className="App">
            <h3>STUDIO GHIBLI LIBRARY</h3>
            {<div>{filmList}</div>}
          </div>
        ) */
      },
    });
  };
}

export default FilmPageById;
