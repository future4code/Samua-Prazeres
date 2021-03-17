import React, { Component } from "react";
import "./SecaoComentario.css";

export class SecaoComentario extends Component {
  state = {
	  /* implementação 4 */
    inputComentario: "",
  };

  onChangeComentario = (event) => {
    console.log(event.target.value)
      this.setState({
        inputComentario: event.target.value,
      });
  }

  render() {
    return (
      <div className={"comment-container"}>
        <input
          className={"input-comentario"}
          placeholder={"Comentário"}
          value={this.state.inputComentario}
          onChange={this.onChangeComentario}
        />
        <button onClick={this.props.aoEnviar}>Enviar</button>
      </div>
    );
  }
}
