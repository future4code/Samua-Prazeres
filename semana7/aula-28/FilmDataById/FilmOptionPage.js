import React from "react";
import axios from "axios";

export default class FilmOptionPage extends React.Component {
  state = {
    films: [],
    getMovieData:{}
  };

  componentDidMount() {
    this.ghibliLib();
  }

  ghibliLib = async () => {
    try {
      const response = await axios.get(`https://ghibliapi.herokuapp.com/films`);
      console.log(response.data);
      this.setState({ films: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  filmDataById = (event,i) =>{
      console.log(event[i].option.innerText)
    this.setState({filmDataById: event.target.value})
  }

  render() {
    const filmList = this.state.films.map((film) => {
      return <option key={film.id}>{film.title}</option>;
    });

    return (
      <div className="App">
        <h3>STUDIO GHIBLI LIBRARY</h3>
        <select onChange={this.filmDataById}>
          <option>browse the library</option>
          {filmList}
        </select>
      </div>
    );
  }
}
