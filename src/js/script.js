// declaração e variáveis

var nome = "Fiap"
console.log(nome)

let idade = 18
console.log(idade)

const sobrenome = "Fiapinho"
console.log(sobrenome)

//undefined

let exemplo
console.log(exemplo)

//nula
let exemplo1 = null
console.log(exemplo1)

//tipos de variaveis

let ex1 = "Fiap"
console.log(typeof ex1)

let ex2 = 25
console.log(typeof ex2)

let ex3 = true
console.log(typeof ex3)

let ex4 = {}
console.log(typeof ex4)

let ex5 = []
console.log(typeof ex5)

// conversões

// float => string
let numFloat = 123.456
console.log(numFloat.toString())

// string => float
let numString = "12.963"
console.log(parseFloat(numString))

// int => string
let numInt = 12
console.log(numInt.toString())

// string => int
let numString2 = 120
console.log(parseInt(numString2))

// metodos

// metodo lenght - verifica o tamanho da string
let frase = "O mundo da tecnologia"
console.log(frase.length)

// metodo indexOf/lastIndexOf - retorna um trecho do seu codigo
let texto = "programação sustentavel"
console.log(texto.lastIndexOf("ão"))

// metodo slice - retorna parte de um texto passando o inicio e o final
let info = "Programação de ponta"
console.log(info.slice(15,20))

// operadores aritméticos

const a = 10
const b = 20

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)

// operadores lógicos

const c = 20 
const d = 30

console.log(c < d)
console.log(c > d && c < 10)
console.log(c > d  || d > c)
console.log(c == d || d <= c)

// operadores de comparação

const e = 10 
const f = 30

console.log(e == f)
console.log(e === f)
console.log(e != f)

// condicional

