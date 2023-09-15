let dia = Number(prompt("Digite o Número correspondente ao dia a ser selecionado:\n1 - DIA 9 \n2 - DIA 10"))
let numeros = []
switch(dia){
    case 1:
        let desafio = Number(prompt("Digite o número correspondente ao desafio:\n 1 - Desafio 1\n 2 - Desafio 2"))
            switch(desafio){
                case 1:
                    let continuar
                    do {
                        let nome = prompt("Digite seu nome:")
                        let idade = Number(prompt("Digite sua idade:"))
                        let peso = Number(prompt("Digite seu Peso:"))
                        let altura = Number(prompt("Digite sua altura:"))
                        let profissao = prompt("Digite sua profissão:")
                        alert(`Olá ${nome}, você tem ${idade} anos, é ${profissao}, tem ${altura}M e pesa ${peso}Kg.`)
                        continuar = promp("Seus dados estão corretos?\nS - Sim/Continuar\nN - Não/Corrigir Dados").toUpeerCase()
                    }while(continuar === "N")

                    if(idade >= 18){
                        alert("Está liberado para tomar umas geladas!")
                    }else{
                        alert("Sem gelada pra você hoje!")
                    }

                    alert(`O ano que você nasceu foi em ${2023-idade}`)
                    alert(`Sua idade em anos é ${idade}.`)
                    alert(`Sua idade em meses é ${12*idade}`)
                    alert(`Sua idade em semanas é ${52*idade}`)
                    alert(`Sua idade em meses é ${365*idade}`)

                    for(let i = 0; i <= (idade); i++){
                        console.log(`${2023 - idade + i} - ${i} anos de idade`)
                    }

                    let imc = peso/altura**2
                    switch(imc){
                        case imc < 18.5:
                            alert("Sua faixa de IMC indica abaixo do peso!")
                            break;
                        case imc < 24.9:
                            alert("Sua faixa de IMC indica peso normal!")
                            break;
                        case imc < 30:
                            alert("Sua faixa de IMC indica acima do peso!")
                            break;
                        default:
                            alert("Sua faixa de IMC indica Obesidade!")
                            break;
                    }
                    break;
                case 2:
                    let continuar2
                    let nome
                    let idade
                    let salario
                    do {
                        nome = prompt("Digite seu nome:")
                        idade = Number(prompt("Digite sua idade:"))
                        salario = Number(prompt("Digite o seu salario:"))
                        alert(`Olá ${nome}, você tem ${idade} anos e seu salário é de R$${salario}.`)
                        continuar2 = prompt("Seus dados estão corretos?\nS - Sim/Continuar\nN - Não/Corrigir Dados").toUpperCase()
                        console.log(continuar2)
                    }while(continuar2 === "N")
                    alert("A previsão de aumento do seu salário em 10 anos é:")
                    for(let i = 0; i < 10; i++){
                        percentualAumento = 0.015*i
                        salario = (percentualAumento*salario) + salario
                        console.log(`${2023+i} - R$ ${salario}.`)
                    }
            }
        break;
    case 2:
        let desafio2 = Number(prompt("Digite o número correspondente ao desafio:\n1 - Desafio 1\n2 - Desafio 2\n3 - Desafio 3"))
            switch(desafio2){
                case 1:
                    while(true){
                        let numero = parseInt(prompt("Digite um número inteiro positivo:\n\nDigite -1 para sair."))
                        if(numero == "-1"){
                            break;
                        }
                        numeros.push(numero)
                    }
                    numeros.forEach(function(numero, posicao){
                        console.log(`Posição: ${posicao} Valor: ${numero}`)
                    });
                    break;
                case 2:
                    for(let i = 4; i >= 0; i--){
                        let numero = Number(prompt("Digite um número:"))
                        numeros[i] = numero
                    }
                    console.log(numeros)
                    break;
                case 3:
                    let quantidadeNumeros = Number(prompt("Digite quantos números deseja preencher o array:"))
                    for(let i = 0; i < quantidadeNumeros; i++){
                        let numero = Number(prompt(`Digite o ${i+1}º Número:`))
                        numeros[i] = numero
                    }
                    console.log(numeros)
                    let numerosContrario =[]
                    let posicao = 0
                    for(let i = numeros.length-1; i >= 0; i--){
                        numerosContrario[i] = numeros[posicao]
                        posicao ++
                    }
                    console.log(numerosContrario)
                    break;
                case 4:
                    let numero = Number(prompt("Digite algum número para iniciar a sequência de Fibonacci:"))
                    let fibonacci = [numero-1,numero]
                    for(let i = 0; i < 8; i++){
                        fibonacci.push(fibonacci[i]+fibonacci[i+1])
                    }
                    console.log(fibonacci)


        
}}
