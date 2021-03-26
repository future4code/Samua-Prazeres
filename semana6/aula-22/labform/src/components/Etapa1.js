import React from "react";

export default class Etapa1 extends React.Component {
  render() {
    return (
      <div className="etapa1">
        <h2>ETAPA 1 - DADOS GERAIS</h2>
        <p>1. Qual o seu nome?</p>
        <input></input>
        <p>2. Qual sua idade?</p>
        <input></input>
        <p>1. Qual o seu email?</p>
        <input></input>
        <p>1. Qual sua escolaridade?</p>
        <select>
          <option>Ensino Médio Incompleto</option>
          <option>Ensino Médio Completo</option>
          <option>Ensino Superior Incompleto</option>
          <option>Ensino Superior Completo</option>
        </select>
        <br />
        <br />
      </div>
    );
  }
}
