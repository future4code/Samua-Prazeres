function novaTarefa() {
    let diaDaSemana = document.getElementById ("dias-semana").value
    let tarefa = document.getElementById ("tarefa").value
    document.getElementById (diaDaSemana).innerHTML += "<p> * " + tarefa + "</p>"
    document.getElementById ("tarefa").value = ""
}