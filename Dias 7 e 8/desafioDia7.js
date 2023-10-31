function maxAge(list){
    let maxAgeValue = list.reduce(function(prev, current){
         return prev > current ? prev : current;
     })
     return maxAgeValue}

 function somaLista(list){
     let soma = 0;
     for (let i = 0; i < list.length; i++){
         soma += list[i]
     }
     return soma}

 function maiorQue7(list){
    let quantidade = 0;
    for (let i = 0; i < list.length; i++){
        if (list[i] > 7)
            quantidade++    
    }
    return quantidade}
let desafio = Number(prompt("Digite o número correspondente ao desafio:\n 1 - Desafio 1\n 2 - Desafio 2"))
        switch(desafio){
            case 1:
                let contador = 1;
                let notasM = [];
                let notasF = [];
                alert("Cadastro de notas dos alunos por sexo!")
                let quantidadeAlunos = Number(prompt("Deseja cadastrar quantos alunos:"))
                while(contador <= quantidadeAlunos){
                    let nota = Number(prompt(`Digite a nota do ${contador}º Aluno! `))
                    let sexoAluno = prompt(`Digite o sexo do ${contador}º Aluno!:\nM - Masculino\nF -Feminino`).toUpperCase()
                    if(sexoAluno === "M"){
                        notasM.push(nota)
                    }
                    if(sexoAluno === "F"){
                        notasF.push(nota)
                    }
                    contador++
                }
                console.log(`
                    A média geral de todos os alunos foi ${(somaLista(notasM)+somaLista(notasF))/(notasM.length + notasF.length)}\n
                    A quantidade de homens com nota cadastrada foi de ${notasM.length}.\n
                    A quantidade de homens com a nota acima de 7 foram ${maiorQue7(notasM)}.\n
                    A quantidade de mulheres com nota cadastrada foi de ${notasF.length}.\n
                    A quantidade de mulheres com a nota acima de 7 foram ${maiorQue7(notasF)}.\n`)
                break;
            case 2:
                let saldo = 500;
                let numero = 1;
                let valores = [];
                let nome = prompt("Digite seu nome:")
                let cpf = Number(prompt("Digite seu CPF:"))
                while(numero === 1){
                    alert(`Saldo da conta: R$ ${saldo}.`)
                    let opcao = Number(prompt("Digite a opcao saque ou depósito:\n1 - Saque\n2 - Depósito"))
                    let valor = Number(prompt("Digite o valor:"))
                    if (opcao === 1){
                        if(saldo > valor){
                            alert(`Saque de ${valor} reais permitido!`)
                            saldo -= valor
                            valores.push(valor)
                        }else{alert(`Saldo insuficiente para o saque de ${valor} reais!`)}}
                    if (opcao === 2){
                        if(valor > 0){
                            alert(`Depósito de ${valor} reais realizado!`)
                            saldo += valor
                            valores.push(valor)
                        }else{alert("Não é permitido o depósito de valores negativos ou 0 reais.")}}
                    numero = Number(prompt("Digite a opção desejada:\n1 - Continuar 2 - Sair"))
                }
                alert(`O maior valor inserido foi de: ${maxAge(valores)}`)
                alert(`A média dos valores inseridos foi de R$ ${somaLista(valores)/valores.length}`)

                }