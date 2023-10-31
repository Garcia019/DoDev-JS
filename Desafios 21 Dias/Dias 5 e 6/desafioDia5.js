let desafio = Number(prompt("Digite o número correspondente ao desafio:\n 1 - Desafio 1\n 2 - Desafio 2"))
switch(desafio){
    case 1:
        alert("Calculadora de Dois Números")
        let numeros = null
        function solicitarDoisNumeros(){
            let numeroUm = Number(prompt("Digite o primeiro número:"))
            let numeroDois = Number(prompt("Digite o segundo número:"))
            return [numeroUm, numeroDois]
        }
        let operacao = Number(prompt("Digite o número correspondente a operação desejada:\n1 - SOMA\n2 - SUBTRAÇÃO\n3 - MULTIPLICAÇÃO\n 4 - DIVISÃO"))
        switch(operacao){
            case 1:
                numeros = solicitarDoisNumeros()
                alert(`A soma dos dois números é: ${numeros[0] + numeros[1]} !`)
                console.log(`A Subtração dos dois números é: ${numeros[0] + numeros[1]} !`)
                break;
            case 2:
                numeros = solicitarDoisNumeros()
                alert(`A Subtração dos dois números é: ${numeros[0] - numeros[1]} !`)
                console.log(`A Subtração dos dois números é: ${numeros[0] - numeros[1]} !`)
                break;
            case 3:
                numeros = solicitarDoisNumeros()
                alert(`A Multiplicação dos dois números é: ${numeros[0] * numeros[1]} !`)
                console.log(`A Subtração dos dois números é: ${numeros[0] * numeros[1]} !`)
                break;
            case 4:
                numeros = solicitarDoisNumeros()
                alert(`A Divisão dos dois números é: ${numeros[0] / numeros[1]} !`)
                console.log(`A Subtração dos dois números é: ${numeros[0] / numeros[1]} !`)
                break;
            default:
                alert("Você não selecionou umas das 4 operações!")    
        }
        break;
    case 2:
        let opcoes = Number(prompt("Digite qual opção deseja escolher:\n1 - Abastecer com gasolina\n2 - Abastecer com álcool\n3 - Calibrar os pneus"))
        let valor = null
        switch(opcoes){
            case 1:
                valor = Number(prompt("Digite o valor que deseja abastecer de gasolina:"))
                alert(`Foram abastecidos ${valor/5} litros de gasolina.`)
                console.log(`Foram abastecidos ${valor/5} litros de gasolina.`)
                break;
            case 2:
                valor = Number(prompt("Digite o valor que deseja abastecer de álcool:"))
                alert(`Foram abastecidos ${valor/3} litros de álcool.`)
                console.log(`Foram abastecidos ${valor/3} litros de álcool.`)
                break;
            case 3:
                alert("Pneus calibrados com sucesso.")
                console.log("Pneus calibrados com sucesso.")
                break;
            default:
                alert("Você não selecionou nenhuma das 3 opções do posto.")
                break;
        }
        break;
    default:
        alert("Você não selecionou nenhum Desafio!")
}