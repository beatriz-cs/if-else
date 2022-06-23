//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18

let idade = 23
if (idade >= 18){
    console.log("Você é maior de idade")
}else{
    console.log("Você é criança")
}

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true

let humano = true
if(idade >= 18 && humano === true){
    console.log("Tem que votar nas eleições desse ano")
}else{
    console.log("Você é o robô do B*l$onaro")
}

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro

let mes = "dezembro"
if(mes == "dezembro" || mes == "janeiro"){
    console.log("Você é natalino e nasceu no verão")
}else{
    console.log("Tente novamente na próxima vida")
}

//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R

const nome = "Beatriz"

if(nome[0] === "R"){
    console.log("Parabéns, seu nome começa com R!")
}else{
    console.log("Seu nome começa com outra letra do alfabeto")
}

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E

const sobrenome = "Cardeal"

if(sobrenome.length > 6 || nome[0] ==="E"){
    console.log("Parabéns, o seu nome foi aprovado!")
}else{
    console.log("Não foi dessa vez :[")
}