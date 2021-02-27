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


/* DATA: 24-02 
Exercícios de interpretação de código */
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

/* DATA: 25-02 
Exercícios de interpretação de código 
1-RESPOSTA:
*/

/* Exercícios de escrita de código */
/* 3
RESPOSTA: */
let arrayOriginal = [57, 65, 12, 83, 87, 92, 60]

/* 3-a */
for(let i = 0; i<arrayOriginal.length; i++){
    console.log(arrayOriginal [i])
}

/* 3-b */
for(let i = 0; i<arrayOriginal.length; i++){
    console.log(arrayOriginal [i]/10)
}

/* 3-c */
for(let i = 0; i<arrayOriginal.length; i++){
  if(arrayOriginal[i] %2===0){
    console.log(arrayOriginal[i])
  }
}
/* IMPRESSÃO:
12
92
60 */

/* 3-d*/
for(let i = 0; i<arrayOriginal.length; i++){
    console.log("O elemento do índex " + arrayOriginal.indexOf(arrayOriginal[i]) + " é: " + arrayOriginal[i] )
}
/* IMPRESSÃO:
O elemento do índex 0 é: 57
O elemento do índex 1 é: 65
O elemento do índex 2 é: 12
O elemento do índex 3 é: 83
O elemento do índex 4 é: 87
O elemento do índex 5 é: 92
O elemento do índex 6 é: 60 */

/* 3-e*/
let maiorNumero = 0
for(let i = 0; i<arrayOriginal.length; i++){
  if(arrayOriginal[i] > maiorNumero){
    maiorNumero = arrayOriginal[i]
    }
}

let menorNumero = Number.POSITIVE_INFINITY
for(let i = 0; i<arrayOriginal.length; i++){
  if(arrayOriginal[i] < menorNumero){
    menorNumero = arrayOriginal[i]
    }
}
    
 console.log("O maior número é " + maiorNumero + " e o menor número é " + menorNumero)
/* IMPRESSÃO: O maior número é 92 e o menor número é 12 */
