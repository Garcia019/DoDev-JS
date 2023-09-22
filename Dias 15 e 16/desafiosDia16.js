function opcao(){
    let opcao = parseInt(prompt("Digite a opção que você deseja realizar:\n1 - Cadastrar\n2 - Login\n3 - Excluir\n4 - Encerrar."))
    return opcao
}

function cadastro(listaUsuario, listaSenha){
    let nome = prompt("Digite seu nome para realizar cadastro:")
    let senha = prompt("Agora digite sua senha para terminar o cadastro:")
    listaUsuario.push(nome)
    listaSenha.push(senha)
}

function login(nome, senha, listaUsuario, listaSenha){
    if (listaUsuario.includes(nome)){
        indexNome = listaUsuario.indexOf(nome)
        if (listaSenha[indexNome] === senha){
            return true
        }else{
            return false
        }
    }else{
        return false
    }
}

function excluir(nome, listaUsuario, listaSenha){
    indexNome = listaUsuario.indexOf(nome)
    if (indexNome != -1){
        listaUsuario.splice(indexNome,1)
        listaSenha.splice(indexNome,1)
        return true
    }else{
        return false
    }
    
}

let listaUsuario = []
let listaSenha = []
do{
    let nome
    let senha
    opcaoMenu = opcao()
    switch(opcaoMenu){
        case 1:
            cadastro(listaUsuario, listaSenha)
            alert("Cadastro realizado com sucesso!")
            break;
        case 2:
            nome = prompt("Digite o nome do usuário para login:")
            senha = prompt("Digite a sua senha para login:")
            if(login(nome, senha, listaUsuario, listaSenha)){
                alert("Login realizado com sucesso!")
            }else{
                alert("Senha ou usuário inválidos!!")
            }
            break;
        case 3:
            nome = prompt("Digite o nome do usuário a ser excluído:")
            if(excluir(nome, listaUsuario, listaSenha)){
                alert("Usuário excluído com sucesso!")
            }else{
                alert("Usuário não encontrado!")
            }
            break;
        case 4:
            break;
        default:
            alert("Nenhuma opção mostrada foi solicitada!")

    }
}while(opcaoMenu != 4)