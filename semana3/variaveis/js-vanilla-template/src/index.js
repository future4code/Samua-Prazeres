/* ---Exercícios de interpretação de código */
/* 1 -
OS VALORES IMPRESSOS SERÃO: 10 para o primeiro log e 10 , 5 para o segundo log*/

/* 2 - 
OS VALORES IMPRESSOS NO LOG SERÃO: 10, 10, 1O*/


/* ---Exercícios de escrita de código */
/* 1 */
/* 1-a */ 
let nome
/* 1-b */ 
let idade

/* 1-c */
console.log("variavel de nome", typeof nome, "variavel de idade", typeof idade)
/* IMPRESSÃO: variavel de nome undefined variavel de idade undefined */

/* 1-d 
O RESULTADO DA IMPRESSÃO DO TIPO DE VARIAVEL SENDO CLASSIFICADO COMO "undefined"
DEMONSTRA A FALTA DE ATRIBUIÇÃO DE VALORES A VARIAVEL*/

/* 1-d(2)*/
nome = prompt ("qual seu nome?")
idade = prompt ("qual sua idade?")

/* 1-e */
console.log("variavel de nome", typeof nome, "variavel de idade", typeof idade)
/* IMPRESSÃO: variavel de nome string variavel de idade string 
O RESULTADO DA IMPRESSÃO DO TIPO DE VARIAVEL SENDO CLASSIFICADO COMO "string"
DEMONSTRA A ATRIBUIÇÃO DE VALORES REPRESENTADOS POR TEXTO OU SEQUENCIA DE CARACTERES */

/* 1-f */
console.log("Olá", nome,", você tem", idade ,"anos")
/* IMPRESSÃO: Olá samua , você tem 27 anos */

/* 2 */
alert ("agora que ja nos conhecemos um pouco, precisamos que nos conte seus dados para entrega e preferencia de material")
let email = prompt ("1. digite seu email favorito")
let telefone = prompt ("2. agora seu numero de telefone")
let endereco = prompt ("3. para finalizarmos os meios de contato e entrega, por favor preencha com seu endereço") 
let filme = prompt ("4. agora 3 generos cinematográficos que gostaria de receber materiais promocionais sobre")
let musica = prompt ("5. e 3 generos musicais dos quais gostaria de receber materiais promocionais sobre")

console.log("1. email:", email)
console.log("2. telefone:", telefone)
console.log("3. endereço:", endereco)
console.log("4. cinema:", filme)
console.log("5. musica:", musica)

/* IMPRESSÕES:
1. email: samua@samua.com
2. telefone: 99 9 9999 9999
3. endereço: rua dos bobos, numero 00, bairro: esquerda - sp/sp
4. cinema: suspense, drama, sci-fi
5. musica: Raprockandrollpsicodeliahardcoreragga */


/* 3 */
let comidas = ["lasanha", "estrogonofe", "vatapa", "feijoada", "croissant de chocolate"]

/* 3-a */
console.log(comidas)
/* IMPRESSÃO: (5) ["lasanha", "estrogonofe", "vatapa", "feijoada", "croissant de chocolate"] */

/* 3-b */
console.log("Essas são as minhas comidas preferidas:")
console.log(comidas [0])
console.log(comidas [1])
console.log(comidas [2])
console.log(comidas [3])
console.log(comidas [4])
/* IMPRESSÃO:
Essas são as minhas comidas preferidas:
lasanha
estrogonofe
vatapa
feijoada
croissant de chocolate */

/* 3-c */
let comidaUsuario = prompt ("qual sua comida favorita?")
console.log("minha comida favorita é:", comidaUsuario)

comidas [1] = comidaUsuario
console.log(comidas)
/* IMPRESSÃO:
minha comida favorita é: bolo de cenoura
(5) ["lasanha", "bolo de cenoura", "vatapa", "feijoada", "croissant de chocolate"] */


/* 4 */
/* 4-a */
let perguntas = ["o daftpunk se separou hoje?", "o nome do meu cachorro é geraldo?", "me chamo camila?"]
let respotas = [false, true]

/* 4-b */
console.log(perguntas [0], respotas[1])
console.log(perguntas [1], respotas[1])
console.log(perguntas [2], respotas[0])
/* IMPRESSÃO:
o daftpunk se separou hoje? true
o nome do meu cachorro é geraldo? true
me chamo camila? false */




