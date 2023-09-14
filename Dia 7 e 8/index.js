let dia = Number(prompt("Digite o dia que deseja acessar:\n1 - Dia 7\n2 - Dia 8"))
switch(dia){
    case 1:
        let exemplo = Number(prompt("Digite o exemplo que quer ver:\n1 - Exemplo 1(While)\n2 - Exemplo 2(DoWhile)"))
        switch(exemplo){
            case 1:
                let condicao = true;
                while(condicao){
                    let idade = Number(prompt("Digite sua idade:"))
                    if(idade < 18){
                        console.log("Você é menor de idade, entrada negada!")
                        alert("Você é menor de idade, entrada negada!")
                        condicao = false;
                    }
                    if(idade >= 18){
                        console.log("Você é maior de idade, entrada permitida!")
                        alert("Você é maior de idade, entrada permitida!")
                    }
                }
                alert("Saiu do while!")
                console.log("Saiu do while!")
                break;
            case 2:
                condicao = false;
                do{
                    let idade = Number(prompt("Digite sua idade:"))
                    if(idade < 18){
                        console.log("Você é menor de idade, entrada negada!")
                        alert("Você é menor de idade, entrada negada!")
                        condicao = false;
                    };
                    if(idade >= 18){
                        console.log("Você é maior de idade, entrada permitida!")
                        alert("Você é maior de idade, entrada permitida!")
                        condicao = true;
                    };
                }while(condicao2);
                break;
            }
        break;
    case 2:


}
