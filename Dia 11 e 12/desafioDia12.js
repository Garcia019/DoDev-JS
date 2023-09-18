let nomes = []
let senhas = []
let nome
let senha
let sair = true
do{
    let opcao = Number(prompt("Selecione uma das opções abaixo:\n1 - Cadastrar\n2 - Login\n3 - Excluir\n4 - Encerrar"))
    switch(opcao){
        case 1:
            nome = prompt("Digite o nome de usuário a ser cadastrado:")
            senha = prompt("Digite uma senha a ser criada:")
            nomes.push(nome)
            senhas.push(senha)
            alert(`Usuário ${nome} cadastrado com sucesso.`)
            break;
        case 2:
            nome = prompt("Digite seu login:")
            senha = prompt("Digite sua senha:")
            let loginEstado = false
            for(let usuario of nomes){
                if (usuario === nome && senhas[nomes.indexOf(usuario)] === senha){
                    loginEstado = true
                    break;
                }
            }
            if(loginEstado){
                alert("Login realizado com sucesso!")
            }else{
                alert("Usuário ou Senha inválidos!")
            }
            
            break;
        case 3:
            nome = prompt("Digite o nome do usuário a ser excluído:")
            senha = prompt("Digite a senha do usuário para realizar a exclusão:")
            for(let usuario of nomes){
                if (usuario === nome && senhas[nomes.indexOf(usuario)] === senha){
                    loginEstado = true
                    break;
                }
            }
            if(loginEstado){
                nomes.splice(nome)
                senhas.splice(senha)
                alert("Usuário excluído com sucesso!")
            }else{
                alert("Usuário ou Senha inválidos!\nExclusão não realizada!")
            }
            break;
        case 4:
            sair = false;
            alert("Encerrando sistema!")
            break;
        default:
            alert("Opção inválida! ")
            break;
    }
    }while(sair)