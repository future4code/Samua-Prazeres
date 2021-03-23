/* Exercício 1 */
let numeros = [2, 3, 90, 53, 59, 60, 67, 84, 73, 42]
function aoContrario() {
  numeros.reverse()
  console.log (numeros)
}
aoContrario(numeros)

/* Exercício 2 */
let numeros = [2, 3, 90, 53, 59, 60, 67, 84, 73, 42]
numeros.filter (function(elevados) {
  if (elevados % 2 === 0) {
  console.log(elevados*elevados)
  }
})

/* Exercício 3 */
let numeros = [2, 3, 90, 53, 59, 60, 67, 84, 73, 42]
let numerosPares = []
numeros.filter (function(pares) {
  if (pares % 2 === 0) {
  numerosPares.push(pares)
  }
})
console.log (numerosPares)

/* Exercício 4 */
let numeros = [2, 3, 90, 53, 59, 60, 67, 84, 73, 42]
function maiorNumero (){
    console.log(
      Math.max (... numeros)
      )
  }
  maiorNumero(numeros)

/* Exercício 5 */
let numeros = [2, 3, 90, 53, 59, 60, 67, 84, 73, 42]
function quantidade(){
    console.log (numeros.length)
  }
  quantidade(numeros)

/* Exercício 6 */

/* Exercício 7 */
let numeros = [2, 3, 90, 53, 59, 60, 67, 84, 73, 42]
let primeirosNumerosPares = []
function primeirosPares (n){
  let par = 0, numero = 0
  for (let i = 1; i <= n; i++){
    numero += par
    primeirosNumerosPares.push(par)
    par +=2
    }
  return par
}
primeirosPares(12)
console.log (primeirosNumerosPares)

/* Exercício 8 */
function triangulo (a, b, c) {
    if (a === b && a === c && b === c){
      return "Equilátero"
    } else if (a !== b && a !== c && b !== c){
      return "Escaleno"
    } else {
      return "Isósceles"
    }
}
let resultado = triangulo(4, 6, 8)
console.log(resultado)

/* Exercício 9 */
function objetoQualquer (num1, num2) {
    this.maiorNumero = Math.max (num1, num2);
    this.maiorDivisivelporMenor = Math.max (num1, num2) % Math.min (num1, num2) === 0;
    this.diferenca = Math.max (num1, num2) - Math.min (num1, num2);
    return (this)
  }
let objeto = new objetoQualquer (10,50)
console.log (objeto)

/* Exercício 10 */
let segundos = []

function crescente(){
  numeros.sort()
  segundos.push(numeros[1])
  numeros.reverse()
  segundos.push(numeros[1])
}
crescente(numeros)
console.log(segundos.reverse())

/* Exercício 11 */
function crescente(){
  numeros.sort()
  console.log(numeros)
}
crescente(numeros)

/* Exercício 12 */
let filme = new Object()
  filme.nome = "O Diabo Veste Prada",
  filme.ano = 2006,
  filme.diretor = "David Frankel",
  filme.atores = ["Meryl Streep", "Anne Hathaway",  "Emily Blunt", "Stanley Tucci"],
console.log(filme)
/* OU */
function filme () {
    this.nome = "O Diabo Veste Prada";
    this.ano = 2006;
    this.diretor = "David Frankel";
    this.atores = ["Meryl Streep", "Anne Hathaway",  "Emily Blunt", "Stanley Tucci"];
    return (this)
  }
  let filmeFavorito = new filme ()
  console.log (filmeFavorito)
  
/* Exercício 13 */
let assistirFilme = function (){
    let filme = {
      nome: "O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel",
      atores: ["Meryl Streep", "Anne Hathaway",  "Emily Blunt", "Stanley Tucci"]
    }
  return console.log (`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]} , ${filme.atores[1]} , ${filme.atores[2]} e ${filme.atores[3]}`)
   }
assistirFilme ()

/* Exercício 14 */
function criaRetangulo (lado1, lado2) {
    this.largura = lado1;
    this.altura = lado2;
    this.perimetro = (2 * (lado1 + lado2));
    this.area = (lado1 * lado2);
    return (this)
  }
let retangulo = new criaRetangulo (5,6)
console.log (retangulo)

/* Exercício 15 */
const alguem = {
    nome: "um nome ai",
    idade: 69,
    email: "um_nome_ai@nofuture.com",
    endereco: "Rua dos bobos, num 0"
}
function ninguem (){
  alguem.nome = "ANONIMO";
}
ninguem (alguem)
console.log(alguem)

/* Exercício 16 a*/
let pessoas = [
    { nome: "Pedro", idade: 20 },
    { nome: "João", idade: 10 },
    { nome: "Paula", idade: 12 },
    { nome: "Artur", idade: 89 } 
]
let adultos = pessoas.filter((pessoa) =>{
  if (pessoa.idade>18){
    return true
  }
})
console.log(adultos)

/* Exercício 16 b*/
let pessoas = [
    { nome: "Pedro", idade: 20 },
    { nome: "João", idade: 10 },
    { nome: "Paula", idade: 12 },
    { nome: "Artur", idade: 89 } 
]
let criancas = pessoas.filter((pessoa) =>{
  if (pessoa.idade<18){
    return true
  }
})
console.log(criancas)

/* Exercício 17 a*/
const array = [1, 2, 3, 4, 5, 6]
array.forEach((arr, index) => {
    array[index] *= 2
})
console.log(array)
/* OU */
const array = [1, 2, 3, 4, 5, 6]
array.map((arr, index) => {
    array[index] *= 2
})
console.log(array)

/* Exercício 17 b*/
const array = [1, 2, 3, 4, 5, 6]
array.forEach((arr, index) => {
    array[index] = String(index)
})
console.log(array)
/* OU */
const array = [1, 2, 3, 4, 5, 6]
array.map((arr, index) => {
    array[index] = String(index)
})
console.log(array)

/* Exercício 17 c*/
const array = [1, 2, 3, 4, 5, 6]
let arrayFinal = []
array.filter (function(impressao) {
  if (impressao % 2 === 0){
    arrayFinal.push(impressao + " é par")
  } else {
    arrayFinal.push(impressao + " é impar")
    }
})
console.log(arrayFinal)

/* Exercício 18 a*/
const pessoas = [
    { nome: "Paula", idade: 12, altura: 1.8},
    { nome: "João", idade: 20, altura: 1.3},
    { nome: "Pedro", idade: 15, altura: 1.9},
    { nome: "Luciano", idade: 22, altura: 1.8},
    { nome: "Artur", idade: 10, altura: 1.2},
    { nome: "Soter", idade: 70, altura: 1.9}
]
let permitidos = pessoas.filter((pessoa) =>{
  if (pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura > 1.5){
    return true
  }
})
console.log(permitidos)

/* Exercício 18 b*/
const pessoas = [
    { nome: "Paula", idade: 12, altura: 1.8},
    { nome: "João", idade: 20, altura: 1.3},
    { nome: "Pedro", idade: 15, altura: 1.9},
    { nome: "Luciano", idade: 22, altura: 1.8},
    { nome: "Artur", idade: 10, altura: 1.2},
    { nome: "Soter", idade: 70, altura: 1.9}
]
let naoPermitidos = pessoas.filter((pessoa) =>{
  if (pessoa.idade < 14 || pessoa.idade > 60||pessoa.altura < 1.5){
    return true
  }
})
console.log(naoPermitidos)

/* Exercício 19 */
const consultas = [
    { nome: "João", genero: "masculino", cancelada: false, dataDaConsulta: "01/10/2019" },
    { nome: "Pedro", genero: "masculino", cancelada: true, dataDaConsulta: "02/10/2019" },
    { nome: "Paula", genero: "feminino", cancelada: false, dataDaConsulta: "03/11/2019" },
    { nome: "Márcia", genero: "feminino", cancelada: true, dataDaConsulta: "04/11/2019" }
]
let canceladasOuNao = consultas.filter((consulta) =>{
  if (consulta.cancelada === true && consulta.genero === "masculino"){
    return console.log(`Olá, Sr. ${ consulta.nome }. Infelizmente, sua consulta marcada para o dia ${ consulta.dataDaConsulta } foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`)
  }else if(consulta.cancelada === true && consulta.genero === "feminino"){
   return console.log(`Olá, Sra. ${ consulta.nome }. Infelizmente, sua consulta marcada para o dia ${ consulta.dataDaConsulta } foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`)
  }else if(consulta.cancelada === false && consulta.genero === "feminino"){
   return console.log(`Olá, Sra. ${ consulta.nome }. Estamos enviando esta mensagem para lembrá-la da sua consulta no dia ${ consulta.dataDaConsulta }. Por favor, acuse o recebimento deste e-mail.`)
  }else(consulta.cancelada === false && consulta.genero === "masculino")
   return console.log(`Olá, Sr. ${ consulta.nome }. Estamos enviando esta mensagem para lembrá-l0 da sua consulta no dia ${ consulta.dataDaConsulta }. Por favor, acuse o recebimento deste e-mail.`)
  })

/* Exercício 20 */
