import React from "react";
import axios from "axios";

export default class UserListage extends React.Component {
  state = {
    userData: [],
  };

  componentDidMount() {
    this.globalUserList();
  }

  globalUserList = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "samua-prazeres-cruz",
          },
        }
      )
      .then((response) => {
        this.setState({ userData: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  deleteUser = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: "samua-prazeres-cruz",
          },
        }
      )
      .then((response) => {
        this.globalUserList();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const userListRender = this.state.userData.map((user) => {
      return (
        <div key={user.id}>
          <p>{user.name}</p>
          <button onClick={() => this.deleteUser(user.id)}>apagar</button>
        </div>
      );
    });
    return (
      <div>
        <h3>lista de usuarios</h3>
        <ul>{userListRender}</ul>
      </div>
    );
  }
}
