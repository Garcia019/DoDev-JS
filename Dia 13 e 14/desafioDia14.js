function novosValores(){
    opcao = prompt("Deseja calcular novamente com novos valores?\n1 - SIM\n2 - NÃO")
    if (opcao == 1){
        ajusteSalarial()
    }else{
        alert("Saindo da calculadora de ajuste salarial!")
    }
}
function calcularAumento(salario, nome){
        if(salario < 1501){
            alert(`Olá ${nome} seu salário teve aumento de 20% e agora é de R$ ${salario*1.2}.`)
        }else if(salario < 2001){
            alert(`Olá ${nome} seu salário teve aumento de 15% e agora é de R$ ${salario*1.15}.`)
        }else if(salario < 3001){
            alert(`Olá ${nome} seu salário teve aumento de 10% e agora é de R$ ${salario*1.10}.`)
        }else{
            alert(`Olá ${nome} seu salário teve aumento de 5% e agora é de R$ ${salario*1.05}.`)
        }
        novosValores()
    }
function ajusteSalarial(){
    alert("     ====== Bem-vindo(a) a calculadora de ajuste salarial ======")
    let nome = prompt("Digite seu nome:")
    let salario = Number(prompt("Digite seu salario:"))
    console.log(salario)
    calcularAumento(salario, nome)

}

ajusteSalarial()