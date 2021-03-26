import React from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: "",
    filtro: "",
  };

  /* implementação 4 */
  componentDidUpdate() {
    localStorage.setItem(
      "lista de tarefas",
      JSON.stringify(this.state.tarefas)
    );
  }

  componentDidMount() {
    const listaStringfada = localStorage.getItem("lista de tarefas");
    const listaObjetificada = JSON.parse(listaStringfada);
    this.setState({ tarefas: listaObjetificada });
  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  /* implementação 1 */
  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    };
    const novaTarefaAdicionada = [novaTarefa, ...this.state.tarefas];
    this.setState({ tarefas: novaTarefaAdicionada });
    this.setState({ inputValue: "" });

    console.log("nova tarefa", novaTarefa);
  };

  /* implementação 2 */
  selectTarefa = (id) => {
    const listaDeTarefasRiscadas = this.state.tarefas.map((tarefas) => {
      if (id === tarefas.id) {
        const tarefaRiscada = {
          ...tarefas,
          completa: !tarefas.completa,
        };
        return tarefaRiscada;
      } else {
        return tarefas;
      }
    });

    this.setState({ tarefas: listaDeTarefasRiscadas });
  };

  /* implementação 3 */
  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
  };

  /* desafio 4 */
  limpaLista = () => {
    const listaZerada = [];
    this.setState({ tarefas: listaZerada });
    this.setState({ inputValue: "" });
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <Tarefa
                key={tarefa.id}
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            );
          })}
        </TarefaList>
        <button /* desafio 4 */ onClick={this.limpaLista}>limpar lista</button>
      </div>
    );
  }
}

export default App;
