class Computador{
    Tipo
    Processador
    Video
    Armazenamento
    MemoriaRam
    Ssd
    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
        this.Tipo = tipo
        this.Processador = processador
        this.Video = video
        this.Armazenamento = armazenamento
        this.MemoriaRam = memoriaRam
        this.Ssd = ssd
    }
    exibirInformacoes(){
        console.log(`O tipo do seu computador é ${this.tipo}.`)
        console.log(`O processador do seu computador é ${this.tipo}.`)
        console.log(`O vídeo do seu computador é ${this.tipo}.`)
        console.log(`O armazenamento do seu computador é ${this.tipo} GB.`)
        console.log(`A memória RAM do seu computador é ${this.tipo} GB.`)
        if (this.ssd === true){
            console.log("O seu do seu computador possui SSD.")
        }else{
            console.log("O seu computador não possui SSD")
        }
        
    }
}

class Carro{
    Nome
    Potencia
    VelocidadeMaxima
    Aceleracao
    constructor(nome, potencia, velocidadeMaxima, aceleracao){
        this.Nome = nome
        this.Potencia = potencia
        this.VelocidadeMaxima = velocidadeMaxima
        this.Aceleracao = aceleracao
    }
    tempoParaChegar(distancia){
        let tempo = distancia/(this.VelocidadeMaxima / this.Aceleracao)
        return tempo
    }
}

class Corrida{
    Nome
    Tipo
    Distancia
    Participantes 
    Vencedor
    constructor(nome, tipo, distancia,){
        this.Nome = nome
        this.Tipo = tipo
        this.Distancia = distancia
        this.Participantes = []
    }
    definirVencedor(){
        let menorTempo = this.Participantes[0].Carro.tempoParaChegar(this.Distancia)
        let vencedor = this.Participantes[0].NomeEquipe
        for (let participante of this.Participantes){
            let tempo = participante.Carro.tempoParaChegar(this.Distancia)
            if (tempo < menorTempo){
                menorTempo = tempo
                vencedor = participante.NomeEquipe
            }    
        }
        return this.Vencedor = vencedor
    }
    exibirVencedor(){
        console.log(`O vencedor da corrida foi o ${this.Vencedor}`)
    }
}

class Participante{
    NomeEquipe
    Carro
    Piloto
    constructor(nomeEquipe, carro){
        this.NomeEquipe = nomeEquipe
        this.Carro = carro
    }
}

civic = new Carro("Honda Civic", "155 Hp", 195, 7.8)
corolla = new Carro("Toyota Corolla", "177 Hp", 205, 9.2)
cruze = new Carro("Chevrolet Cruze P", "153 Hp", 214, 9)
rocket = new Participante("Rocket", civic)
minotauro = new Participante("Minotauro", corolla)
speed = new Participante("Speed", cruze)
pistao = new Corrida("Copa Pistão", "Nascar", 8000, [])
pistao.Participantes[0] = rocket
pistao.Participantes[1] = minotauro
pistao.Participantes[2] = speed
pistao.definirVencedor()
pistao.exibirVencedor()
