let escolhaDesafio = Number(prompt("Escolha o desafio do dia 3 ou dia 4:"))

if (escolhaDesafio ===3){
    let nome = prompt("Digite seu nome:")
    let idade = Number(prompt("Digite sua idade:"))
    let altura = Number(prompt("Digite sua altura:"))
    let peso = Number(prompt("Digite seu peso:"))
    let anoAtual = 2023
    let anoNascimento = 2023 - Number(idade)
    let imc = peso/(altura**2)
    console.log(altura**2)
    console.log(`Olá ${nome}, você tem ${idade} anos, nasceu ${anoNascimento}, tem ${altura} de altura, pesa ${peso}kg seu IMC é ${imc} Kg/m2`)
    if (idade < 18){
        console.log("Você é menor de idade!")
    }else{
        console.log("Você é maior de idade!")
    }

}

if (escolhaDesafio === 4){
    let desafio = Number(prompt("Digite o número do desafio 1(Desafio do Restaurante) ou 2(Desafio do Motorista):"))
    if (desafio === 1){
        alert("Digite S para SIM ou N para NÃO")

        let estadoFome = prompt("Você está com fome?").toUpperCase()
        let estadoDinheiro = prompt("Você está com dinheiro?").toUpperCase()
        let estadoRestaurante = prompt("O seu restaurante preferido está aberto?").toUpperCase()

        if (estadoFome === "N" || estadoDinheiro === "N"){
            console.log("Hoje a janta será em casa.")
        }else if (estadoFome === "S" && estadoDinheiro === "S" && estadoRestaurante === "N"){
            console.log("Peça um delivery!")
        }else if (estadoFome === "S" && estadoDinheiro === "S" && estadoRestaurante === "S"){
            console.log("Hoje o jantar será no seu restaurante preferido!")
        }
    }
    if (desafio === 2){
        let nomeUsuario = prompt("Digite seu nome:")
        let idadeUsuario = prompt("Digite sua idade:")
        let carteiraHabilitacao = prompt("Possui carteira de habilitação(S/N)?")
        let carro = prompt("Possui algum carro(S/N):")

        if (idadeUsuario < 18 || carteiraHabilitacao === "N"){
            console.log(`${nome}, você não pode dirigir!`)
        }else if (idadeUsuario >= 18 && carteiraHabilitacao === "S" && carro === "N"){
            console.log(`${nome}, você pode dirigir mas não tem um carro.`)
        }else if (idadeUsuario >= 18 && carteiraHabilitacao === "S" && carro === "s"){
            console.log(`${nome}, você será o motorista!`)
        }
    }
}

