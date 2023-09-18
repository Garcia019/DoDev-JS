class Aluno{
    nome
    idade
    areaAtuacao
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }
    apresentar(){
        console.log(`Olá, meu nome é${this.nome}, tenho ${this.idade} anos e minha área de atuação é ${this.areaAtuacao}`)
    }
}

console.log("====== Cadastros de Alunos ======")
let alunoUm = new Aluno("Matheus", 23)
let alunos =[];
let continuar = true;

while(continuar){
    let nome = prompt("Insira o nome do aluno:")
    let idade = parseInt(prompt("Insira a idade do aluno"))
    let aluno = new Aluno(nome,idade)
    let areaAtuacao = prompt("Insira a área de atuação do aluno:\nCaso não tenha deixe em branco")
    aluno.areaAtuacao = areaAtuacao

    let continuar = Number(prompt("Digite 1 case deseje cadastrar um novo aluno:"))
    if (continuar != 1){
        continuar = false
    }
    alunos.push(aluno)
}