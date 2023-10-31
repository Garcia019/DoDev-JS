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