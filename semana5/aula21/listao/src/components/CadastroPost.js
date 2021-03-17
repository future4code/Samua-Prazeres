import React from "react";

class CadastroPost extends React.Component {
  state = {
    nomeUsuario: "",
    fotoUsuario: "",
    fotoPost: "",
  };

  handleNome = (event) => {
    this.setState({
      nomeUsuario: event.target.value,
    });
  };

  handleFotoUsuario = (event) => {
    this.setState({
      fotoUsuario: event.target.value,
    });
  };

  handlePost = (event) => {
    this.setState({
      fotoPost: event.target.value,
    });
  };

  enviarPost = (event) => {
    event.preventDefault();
    const novoPost = {
      nomeUsuario: this.state.nomeUsuario,
      fotoUsuario: this.state.fotoUsuario,
      fotoPost: this.state.fotoPost,
    };
    console.log("eduardo valeus man");
    this.props.adicionarPost(novoPost);
  };

  render() {
    return (
      <form onSubmit={this.enviarPost}>
        <input
        placeholder="nome de usuario"
          onChange={this.handleNome}
          value={this.nomeUsuario}
          type="text"
        />
        <input
        placeholder="foto de usuario"
          onChange={this.handleFotoUsuario}
          value={this.fotoUsuario}
          type="text"
        />
        <input 
        placeholder="imagem post"
        onChange={this.handlePost} 
        value={this.fotoPost} 
        type="text" />
        <button>cadastrar</button>
      </form>
    );
  }
}

export default CadastroPost;
