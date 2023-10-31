let arrayA = [13, 20, 10, 22, 24, 20, 27, 17, 19, 14]
let arrayB = [24, 22, 23, 11, 15, 17, 29, 14, 16, 21]

function jaTem(numeroRecebido,array){
    for (let numeroArray of array){
        if(numeroRecebido === numeroArray){
            return true
        }
    }
}
function mesmoNumero(arrayA, arrayB){
    let arrayMesmoNumero = []
    for(let numero of arrayA){
        for(let numero2 of arrayB){
            if (numero == numero2 && !jaTem(numero,arrayMesmoNumero)){
                arrayMesmoNumero.push(numero)
            }
        }
    }
    console.log(arrayMesmoNumero)
}

mesmoNumero(arrayA,arrayB)
