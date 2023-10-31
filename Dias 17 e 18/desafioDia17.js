class Hotel{
    Id
    Nome
    Categoria
    Endereco
    Telefone
    constructor(id, nome, categoria, endereco, telefone){
        this.Id = id
        this.Nome = nome
        this.Categoria = categoria
        this.Endereco = endereco
        this.Telefone = telefone
    }
    atualizarTelefone(telefone){
        this.Telefone = telefone
    }
}

class Reserva{
    Id
    Hotel
    NomeReponsavel
    DiaEntrada
    DiaSaida
    constructor (id, hotel, nomeResponsavel, diaEntrada, diaSaida){
        this.Id = id
        this.Hotel = hotel.Id
        this.NomeReponsavel = nomeResponsavel
        this.DiaEntrada = diaEntrada
        this.DiaSaida = diaSaida
    }
}

function cadastrarHotel(arrayHotel, hotelId){
    alert("----Bem-vindo ao cadastro de hotéis.----")
    let nome = prompt("Digite o nome do Hotel")
    let categoria = prompt("Digite a categoria do hotel:")
    let endereco = prompt("Digite o endereço do hotel:")
    let telefone = prompt("Digite o telefone do hotel:")
    let hotel = new Hotel(hotelId, nome, categoria, endereco, telefone)
    hotelId ++
    arrayHotel.push(hotel)
    return hotel
}

function cadastrarReserva(id, hotel, nomeReponsavel, diaEntrada, diaSaida, arrayReservas, arrayHotel){
    let reserva = new Reserva(id, hotel, nomeReponsavel, diaEntrada, diaSaida)
    let reservaIncluso = false
    let hotelIncluso = false
    let dataEntrada = reserva.dataEntrada.split("/")
    let dataSaida = reserva.dataSaida.split("/")
    for (let reservaItem of arrayReservas){
        if (reservaItem.Id === id){
            reservaIncluso == true
        }
    }
    for (let hotelItem of arrayHotel){
        if (hotelItem.Id === hotel.Id){
            hotelIncluso == true
        }
    }
    if (dataSaida[2] > dataEntrada[2]){
        // Ano de saída é maior que o ano de entrada
        if(hotelIncluso){
            if(reservaIncluso){
                console.log("ID de reserva já existe!!")
                return reserva
            }else{
                arrayReservas.push(reserva)
                return reserva
            }
        }else{
            console.log("Hotel não cadastrado na rede de hotéis!")
        }
    }else if(dataSaida[2] === dataEntrada[2] && dataSaida[1] > dataEntrada[1]){
        //Ano de saída é o mesmo que a entrada porém o mes e maior
        if(hotelIncluso){
            if(reservaIncluso){
                console.log("ID de reserva já existe!!")
                return reserva
            }else{
                arrayReservas.push(reserva)
                return reserva
            }
        }else{
            console.log("Hotel não cadastrado na rede de hotéis!")
        }
    }else if(dataSaida[2] === dataEntrada[2] && dataSaida[1] === dataEntrada[1] && dataSaida[0] >= dataEntrada[0]){
        //Ano de saída e o mes são os mesmo que a entrada porem o dia é maior ou igual
        if(hotelIncluso){
            if(reservaIncluso){
                console.log("ID de reserva já existe!!")
                return reserva
            }else{
                arrayReservas.push(reserva)
                return reserva
            }
        }else{
            console.log("Hotel não cadastrado na rede de hotéis!")
        }
    }else{
        console.log("Data de saída menor que o data de entrada!")
    }
    
}

function mostrarReservasHotel(hotel, array){
    for (let reserva of array){
        if (reserva.Hotel === hotel.Id){
            console.log(`Nome do hotel - ${hotel.Nome}\nResponsável da reserva - ${reserva.NomeReponsavel}\nDia de entrada - ${reserva.DiaEntrada}\nDia de saída - ${reserva.DiaSaida}`)
        }
    }
}

function mostrarReserva(reservaID, arrayReservas, arrayHotel){
    let posicao
    let achou
    arrayReservas.forEach((reserva, index) => {
        if (reserva.Id === reserva.ID){
            posicao = index
            achou = true
        }
    });
    if(achou){
        let posicaoHotel
        arrayHotel.forEach( (hotel, index) => {
            if (hotel.id === reserva.Hotel){
                posicaoHotel = index
            }
        })
        console.log(`Nome do hotel - ${arrayHotel[posicaoHotel].Nome}\nDia de entrada - ${arrayReservas[posicao].DiaEntrada}\nDia de saída - ${arrayReservas[posicao].DiaSaida}`)
    }else{
        console.log("ID não encontrado!")
    }
}

function mostrarReservasPessoa(nomePessoa, arrayReservas){
    arrayReservas.forEach(reserva => {
        if (reserva.NomeReponsavel === nomePessoa){
            console.log(reserva)
        }
    });
}

function mostrarHotelCategoria(categoria, arrayHotel){
    let arrayHotelCategoria
    for (let hotel of arrayHotel){
        if(hotel.Categoria === categoria){
            arrayHotelCategoria.push(hotel)
        }
    }
    return arrayHotelCategoria
}

function atualizarTelefone(id, telefone, arrayHotel){
    let posicao
    let achou
    arrayHotel.forEach((hotel, index) => {
        if (hotel.Id === id){
            posicao = index
            achou = true
        }
    arrayHotel[posicao].atualizarTelefone(telefone)
    });
}

let arrayHotel = []
let arrayReservas = []
let hotelId = 0
let reservaId = 0
