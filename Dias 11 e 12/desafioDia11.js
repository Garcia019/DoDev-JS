let desafio = Number(prompt("Digite o número correspondente ao desafio:\n 1 - Desafio 1\n 2 - Desafio 2"))
            switch(desafio){
                case 1:
                    let nomes = []
                    let notas = []
                    let notaTotal = 0

                    while(true){
                        nomes.push(prompt("Digite o nome do aluno:"))
                        notas.push(Number(prompt("Digite a nota do aluno:")))
                        let sair = prompt("Se deseja sair digite:\nS - Sair").toUpperCase()
                        if(sair === "SAIR" || sair === "S"){
                            break;
                        }
                    console.log(nomes)
                    console.log(notas)
                    }
                    for(let i = 0 ; i < nomes.length; i++){
                        console.log(`NOME: ${nomes[i]} NOTA: ${notas[i]}`)
                        notaTotal += notas[i]
                    }
                    alert(`O somatório das notas foi de ${notaTotal} pontos.\nA média geral da turma foi de ${notaTotal/notas.length} pontos.`)
                    break;
                case 2:
                    let modelos = []
                    let anos = []
                    let valores = []
                    while(true){
                        let continuar = prompt("Cadastrando carros.\nDigite a letra 'S' ou 'Sair' para sair do cadastro.").toUpperCase()
                        if(continuar === "S" || continuar === "Sair"){
                            break;
                        }
                        modelos.push(prompt("Digite o Modelo do carro:"))
                        anos.push(parseInt(prompt("Digite o ano do carro:")))
                        valores.push(Number(prompt("Digite o valor do carro:")))
                    }
                    modelos.forEach(function(modelo, index){
                        console.log(`${modelo}, ${anos[index]} Valor: ${valores[index]}`)
                    })
                    let max = 0
                    for(let j = 0; j < valores.length - 1; j++){
                        for(let i = 0; i < valores.length - j - 1; i++){
                            if (valores[i] > valores[i+1]){

                                let auxValores = valores[i]
                                valores[i] = valores [i + 1]
                                valores[i + 1] = auxValores

                                let auxAnos = anos[i]
                                anos[i] = anos [i + 1]
                                anos[i + 1] = auxAnos

                                let auxModelos = modelos[i]
                                modelos[i] = modelos [i + 1]
                                modelos[i + 1] = auxModelos
                            }
                        }
                    }
                    alert("Carros ordenados por preço.")
                    modelos.forEach(function(modelo, index){
                        console.log(`Modelo: ${modelo} - ${anos[index]} Valor: ${valores[index]}`)
                    })
                    break;
                default:
                    alert("Você não selecionou nenhum desafio do dia 11.")
                    break;
            }