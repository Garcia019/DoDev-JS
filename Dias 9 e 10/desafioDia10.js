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
            break;
        default:
            alert("Nenhum desafio foi selecionado.")
            break;
break;
    }
