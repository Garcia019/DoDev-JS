class Livro{
    Titulo
    Autor
    Editora
    AnoPublicado
    Disponibilidade
    constructor(titulo, autor, editora, anoPublicado){
        this.Titulo = titulo
        this.Autor = autor
        this.Editora = editora
        this.AnoPublicado = anoPublicado
        this.Disponibilidade = true
    }

}

class Biblioteca{
    Nome
    Endereco
    Telefone
    AcervoDeLivros
    constructor(nome, endereco, telefone, acervoDeLivros){
        this.Nome = nome
        this.Endereco = endereco
        this.Telefone = telefone
        this.AcervoDeLivros = acervoDeLivros
    }
    BuscarLivro(nomeLivro, livros){
        let livroAchado
        let posicao
        livros.array.forEach((element, index) => {
            if (nomeLivro === livro.Nome){
                livroAchado = true
                posicao = index
            }
        });
        if(livroAchado === true){
            console.log(`O nome do livro é ${livros[posicao].Nome}, o autor é ${livros[posicao].Autor} feito em parceria com a editora ${livros[posicao].Editora},
                publicado no ano de ${livros[posicao].AnoPublicado}.` )
        }else{
            console.log("Livro não encontrado!")
        }
        }
    EmprestimoDeLivro(nomeLivro){
        let livroAchado = false
        let posicao
        livros.array.forEach((element, index) => {
            if (nomeLivro === livro.Nome){
                livroAchado = true
                posicao = index
            }
        });
        if(livroAchado && livros[posicao].Disponibilidade){
            return true
        }else{
            return false
        }
    }
    DevolucaoLivro(nomeLivro){
        livros.array.forEach((element, index) => {
            if (nomeLivro === livro.Nome){
                livro.Disponibilidade = true
            }
        });
    }

}
let livros = []
let livro 

livro = new Livro("Torto Arado", "Itamar Vieira Junior", "Todavia", "2019")
livros.push(livro)
livro = new Livro("Os Sete Maridos de Evelyn Hugo","Taylor Jenkins Reid","Paralela","2019")
livro.push(livro)
livro = new Livro("Pachinko","Min Jin Lee","Intrínseca","2020")
livro.push(livro)
livro = new Livro("Antifrágil","Nassim Nicholas Taleb","Objetiva","2020")
livro.push(livro)
livro = new Livro("O avesso da pele","Jeferson Tenório","Companhia das Letras","2020")
Biblioteca = new Biblioteca("Biblioteca do CCBB", "Rua Primeiro de Março, 66 - Centro - Rio de Janeiro, RJ","(21)3808-2030", livros )
