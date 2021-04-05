import React from "react";
import axios from "axios";

export default class RegisterNewUser extends React.Component {
  state = {
    name: "",
    email: "",
  };

  handleName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  createNewUser = () => {
    const body = {
      name: this.state.name,
      email: this.state.email,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "samua-prazeres-cruz",
          },
        }
      )
      .then((response) => {
        console.log(response);
        alert("voce cadastrou um novo usuario");
        this.setState({ name: "", email: "" });
      })
      .catch((error) => {
        console.log(error);
        alert("por algum motivo nao conseguimos registrar um novo usuario");
        this.setState({ name: "", email: "" });
      });
  };

  render() {
    return (
      <div className="App">
        <div>
          <h3>criar usuario</h3>
          <input
            placeholder="nome"
            value={this.state.name}
            onChange={this.handleName}
          />
          <input
            placeholder="email"
            value={this.state.email}
            onChange={this.handleEmail}
          />
          <button onClick={this.createNewUser}>criar</button>
        </div>
      </div>
    );
  }
}
