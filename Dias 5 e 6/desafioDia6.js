let exercicio = Number(prompt("Digite o número correspondente ao Exercício:\n 1 - Exercício 1\n 2 - Exercício 2\n 3 - Exercício 3\n 4 - Exercício 4\n"))
        switch(exercicio){
            case 1:
                let numeroFinal = Number(prompt("Digite o número final da contagem:"))
                alert(`OK, usando o for para contar do 0 até o ${numeroFinal}!`)
                for(let contador = 0; contador <= numeroFinal; contador++){
                    console.log(contador)
                }
                break;
            case 2:
                alert(`OK, usando o for para contar do 0 até o 50 de 5 em 5 números!`)
                for(let contador = 0; contador <= 50; contador += 5){
                    console.log(contador)
                }
                break;
            case 3:
                alert(`OK, usando o for para contar do 50 até o 0 de 5 em 5 números!`)
                for(let contador = 50; contador >=0; contador -=5){
                    console.log(contador)
                }
                break;
            case 4:
                let numeroTabuada = Number(prompt("Digite o número que deseja iniciar na criação das 3 tabuadas:"))
                for(let contador1 = numeroTabuada; contador1 < numeroTabuada+3; contador1++){
                    console.log(`Segue a tabuada do Número ${contador1} !`)
                    for(let contador = 0; contador <= 10; contador ++){
                        console.log(`${contador1} X ${contador} = ${contador1*contador} !`)
                    }
                }
                break;
            default:
                alert("Você não selecionou nenhum exercício proposto!")
                break;
        }