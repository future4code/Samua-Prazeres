import "./App.css";
import React from "react";
import RegisterNewUser from "./telas/RegisterNewUser";
import UserListage from "./telas/UserListage";

export default class App extends React.Component {
  state = {
    screen: "registry",
  };

  screenSwitch = () => {
    switch (this.state.screen) {
      case "registry":
        return <RegisterNewUser />;
      case "listage":
        return <UserListage />;
      default:
        return <div />;
    }
  };

  screenRender = () => {
    if (this.state.screen === "registry") {
      this.setState({ screen: "listage" });
    } else if (this.state.screen === "listage") {
      this.setState({ screen: "registry" });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>LABENUSERS</h1>
        <button onClick={this.screenRender}>trocar de pagina</button>
        {this.screenSwitch()}
      </div>
    );
  }
}
