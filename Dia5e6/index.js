let dia = Number(prompt("Digite o Dia de teste:\n1 - Dia 5\n2 - Dia 6"))

switch(dia){
    case 1:
        let idade = Number(prompt("Digite sua idade:"))
        switch(idade){
            case 10:
                alert("Você tem 10 anos!!")
                console.log("Você tem 10 anos!!")
                break;
            case 15:
                alert("Você tem 15 anos!!")
                console.log("Você tem 15 anos!!")
                break;
            default:
                alert("Você não tem nem 15 anos nem 10 anos!!")
                console.log("Você não tem nem 15 anos nem 10 anos!!")
                break;
        }
        break;
    case 2:
        let numero = Number(prompt("Digite o número que deseja mostrar a tabuada:"))
        for(let contador = 0; contador <= 10; contador ++ ){
            console.log(`${numero} X ${contador} = ${numero*contador} !`)
        }
        break;
    
}


        