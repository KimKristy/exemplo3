// declaração e variáveis

// var nome = "Fiap"
// console.log(nome)

// let idade = 18
// console.log(idade)

// const sobrenome = "Fiapinho"
// console.log(sobrenome)

//undefined

// let exemplo
// console.log(exemplo)

//nula
// let exemplo1 = null
// console.log(exemplo1)

//tipos de variaveis

// let ex1 = "Fiap"
// console.log(typeof ex1)

// let ex2 = 25
// console.log(typeof ex2)

// let ex3 = true
// console.log(typeof ex3)

// let ex4 = {}
// console.log(typeof ex4)

// let ex5 = []
// console.log(typeof ex5)

// conversões

// float => string
// let numFloat = 123.456
// console.log(numFloat.toString())

// string => float
// let numString = "12.963"
// console.log(parseFloat(numString))

// int => string
// let numInt = 12
// console.log(numInt.toString())

// string => int
// let numString2 = 120
// console.log(parseInt(numString2))

// metodos

// metodo lenght - verifica o tamanho da string
// let frase = "O mundo da tecnologia"
// console.log(frase.length)

// metodo indexOf/lastIndexOf - retorna um trecho do seu codigo
// let texto = "programação sustentavel"
// console.log(texto.lastIndexOf("ão"))

// metodo slice - retorna parte de um texto passando o inicio e o final
// let info = "Programação de ponta"
// console.log(info.slice(15,20))

// operadores aritméticos

// const a = 10
// const b = 20

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)

// operadores lógicos

// const c = 20 
// const d = 30

// console.log(c < d)
// console.log(c > d && c < 10)
// console.log(c > d  || d > c)
// console.log(c == d || d <= c)

// operadores de comparação

// const e = 10 
// const f = 30

// console.log(e == f)
// console.log(e === f)
// console.log(e != f)

// condicional

// if

if(true){
    console.log("é verdadeiro")
}

let exemplo = 1
if (exemplo ==  1){
    console.log("Esta correto")
}

// if/else

let nome = "fiap"

if(nome == "fiap"){
    console.log("Nome correto")
    // document.write("Nome certo")
}
else{
    console.log("Nome incorreto")
    // document.write("Nome errado")
}

// if encadeado ou aninhado

let idade = 13
if(idade <= 14){
    console.log("Não pode entrar é menor")
}
else if(idade > 14 && idade <= 18){
    console.log("Pode entrar e curtir")
}
else if(idade > 18 && idade <= 50){
    console.log("Perigo seua pais estão na balada")
}
else{
    console.log("Você deve ficar no sofá assistindo Netflix")
}

// switch case

let time = "Corinthians"

switch(time){
    case "Corinthians":
        console.log("Melhor time")
        break
    case "São Paulo":
        console.log("É tão ruim que não consegue ganhar em casa")
        break
    case "Palmeiras":
        console.log("Simplesmente não tem opção")
        break
    default:
        console.log("Não das opções válidas(santos)")
}

// Ternário

let valor = 100
let resultado = valor == 100 ? "Valor Certo" : "Valor Errado"
console.log(resultado)

let nota = 6
let passou = nota >= 6 ? "Você passou" : "Você não passou"
console.log(passou)