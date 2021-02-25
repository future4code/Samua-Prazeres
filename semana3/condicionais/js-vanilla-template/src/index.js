/* DATA: 23-02 */
/* Exercícios de interpretação de código */
/* 1 
IMPRESSÃO SERIA:
a. false
b. false
c. true
e. boolean */

/* 2 
IMPRESSÃO SERIA:
a. undefined
b. null
c. 11
d. 3
e. 
f. 9 */

/* Exercícios de escrita de código */


/* DATA: 24-02 */
/* Exercícios de interpretação de código */
/* 1 
RESPOSTA:
o codigo pede ao usuario que poste um numero.
sendo ele par, o codigo julga o numero valido e imprime a mensagem "Passou no teste."
sendo ele impar, o codigo julga o numero invalido e imprime a mensagem "Não passou no teste." */

/* 2 
RESPOSTA:
a. se trata de uma ferramenta de busca de valores do item "Frutas" de um supermercado
b. O preço da fruta Maçã é R$ 2.25
c. O preço da fruta Pêra é R$ 5 */

/* 3
RESPOSTA:
a. a primeira linha do codigo abre uma caixa que pede ao usuario que ele escreva um numero,
porem como as respostas de prompt tem como regra serem tipificadas como "string" (sequencia
de caracteres), a inserção do objeto Number muda o tipo dessa resposta para que seja lida 
pelo codigo como valor numerico
b. Esse número passou no teste / mensagem de erro
c. sim, o erro aparece após o programa nao conseguir ler/interpretar a ultima linha do codigo
"console.log(mensagem)", tendo em vista que a mesma está fora do bloco da variavel a qual faz
referencia e portanto não podendo compartilhar dos dados da variavel */

/* Exercícios de escrita de código */
/* 4
RESPOSTA: */
let idade = Number(prompt("qual sua idade?"))

if(idade > 18){
    console.log("Você pode dirigir")
} else{
    console.log("Você não pode dirigir")
}

/* 5
RESPOSTA: */
let turno = prompt("qual turno você estuda?")

if(turno === "M"){
    console.log("Bom dia!")
} else if(turno === "V"){
    console.log("Boa Tarde!")
} else if(turno === "N"){
    console.log("Boa Noite!")
} else{
    console.log("Digite um turno valido!")
}

/* 6
RESPOSTA: */
let turno = prompt("qual turno você estuda?")

switch (turno){
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa Tarde!")
        break
    case "N":
        console.log("Boa Noite!")
        break
    default:
        console.log("Digite um turno valido!")
}

/* 7
RESPOSTA: */
let ingresso = prompt("qual genero de filme voce gostaria de assistir?")
let preco = Number (prompt("qual valor do seu ingresso?"))

if(ingresso === "fantasia" && preco < 15 ){
    console.log("Bom filme!")
} else{
    console.log("Escolha outro filme :(")
}
