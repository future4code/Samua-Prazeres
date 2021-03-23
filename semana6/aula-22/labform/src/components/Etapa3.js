import React from "react";

export default class Etapa3 extends React.Component {
  render() {
    return (
        <div className="etapa3">
        <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
        <p>1. Por que você não terminou um curso de graduação?</p>
        <input></input>
        <p>2. Você fez algum curso complementar?</p>
        <select>
          <option>Curso técnico</option>
          <option>Curso de inglês</option>
          <option>Não fiz curso complementar</option>
        </select>
        <br />
        <br />
      </div>
    );
  }
}
