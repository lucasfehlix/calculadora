var seSomar = false;
var seSubtrair = false;
var seDividir = false;
var seMultiplicar = false;
var inicio = true;
const existePonto = () => {
    return document.getElementById('visor-dados').innerHTML.includes('.')
}
const existeNegativo = () => {
    return document.getElementById('visor-dados').innerHTML.includes('-')
}
const soma = () => {
    let resultado = 0
    let dados = Number.parseFloat(document.getElementById('visor-dados').innerHTML)
    let total = Number.parseFloat(document.getElementById('visor-total').innerHTML)
    if (total == 0) {
        return (dados).toFixed(2)
    } else {
        resultado = (total + dados).toFixed(2) 
        return resultado
    }
}
const subtrai = () => {
    let resultado = 0
    let dados = Number.parseFloat(document.getElementById('visor-dados').innerHTML)
    let total = Number.parseFloat(document.getElementById('visor-total').innerHTML)
    if (total == 0) {
        return (dados).toFixed(2)
    } else {
        if (existeNegativo()) {
            dados *= -1
        }
        resultado = (total - dados).toFixed(2) 
        return resultado
    }
}
const dividi = () => {
    let resultado = 0
    let dados = Number.parseFloat(document.getElementById('visor-dados').innerHTML)
    let total = Number.parseFloat(document.getElementById('visor-total').innerHTML)
    if (dados == 0) {
        return (total).toFixed(2)
    } else if (total == 0) {
        return (dados).toFixed(2)
    } else {
        resultado = (total / dados).toFixed(2) 
        return resultado
    }
}
const multiplica = () => {
    let resultado = 0
    let dados = Number.parseFloat(document.getElementById('visor-dados').innerHTML)
    let total = Number.parseFloat(document.getElementById('visor-total').innerHTML)
    if (dados == 0) {
        return (total).toFixed(2)
    } else if (total == 0) {
        return (dados).toFixed(2)
    } else {
        resultado = (total * dados).toFixed(2) 
        return resultado
    }
}
document.getElementById('btn-1').addEventListener('click', () => {
    if (document.getElementById('visor-dados').innerHTML == '0.00' || document.getElementById('visor-dados').innerHTML === '0') {
        document.getElementById('visor-dados').innerHTML = '1'   
    } else {
        document.getElementById('visor-dados').innerHTML += '1'
    }
});
document.getElementById('btn-2').addEventListener('click', () => {
    if (document.getElementById('visor-dados').innerHTML == '0.00' || document.getElementById('visor-dados').innerHTML === '0') {
        document.getElementById('visor-dados').innerHTML = '2'
    } else {
        document.getElementById('visor-dados').innerHTML += '2'
    }
});
document.getElementById('btn-3').addEventListener('click', () => {
    if (document.getElementById('visor-dados').innerHTML == '0.00' || document.getElementById('visor-dados').innerHTML === '0') {
        document.getElementById('visor-dados').innerHTML = '3'
    } else {
        document.getElementById('visor-dados').innerHTML += '3'
    }
});
document.getElementById('btn-4').addEventListener('click', () => {
    if (document.getElementById('visor-dados').innerHTML == '0.00' || document.getElementById('visor-dados').innerHTML === '0') {
        document.getElementById('visor-dados').innerHTML = '4'   
    } else {
        document.getElementById('visor-dados').innerHTML += '4'
    }
});
document.getElementById('btn-5').addEventListener('click', () => {
    if (document.getElementById('visor-dados').innerHTML == '0.00' || document.getElementById('visor-dados').innerHTML === '0') {
        document.getElementById('visor-dados').innerHTML = '5'   
    } else {
        document.getElementById('visor-dados').innerHTML += '5'
    }
});
document.getElementById('btn-6').addEventListener('click', () => {
    if (document.getElementById('visor-dados').innerHTML == '0.00' || document.getElementById('visor-dados').innerHTML === '0') {
        document.getElementById('visor-dados').innerHTML = '6'   
    } else {
        document.getElementById('visor-dados').innerHTML += '6'
    }
});
document.getElementById('btn-7').addEventListener('click', () => {
    if (document.getElementById('visor-dados').innerHTML == '0.00' || document.getElementById('visor-dados').innerHTML === '0') {
        document.getElementById('visor-dados').innerHTML = '7'   
    } else {
        document.getElementById('visor-dados').innerHTML += '7'
    }
});
document.getElementById('btn-8').addEventListener('click', () => {
    if (document.getElementById('visor-dados').innerHTML == '0.00' || document.getElementById('visor-dados').innerHTML === '0') {
        document.getElementById('visor-dados').innerHTML = '8'   
    } else {
        document.getElementById('visor-dados').innerHTML += '8'
    }
});
document.getElementById('btn-9').addEventListener('click', () => {
    if (document.getElementById('visor-dados').innerHTML == '0.00' || document.getElementById('visor-dados').innerHTML === '0') {
        document.getElementById('visor-dados').innerHTML = '9'   
    } else {
        document.getElementById('visor-dados').innerHTML += '9'
    }
});
document.getElementById('btn-0').addEventListener('click', () => {
    if (inicio && document.getElementById('visor-dados').innerHTML === '0.00') {
        document.getElementById('visor-dados').innerHTML = '0'
        inicio = false
    } else if (document.getElementById('visor-dados').innerHTML === '0') {
        document.getElementById('visor-dados').innerHTML = '0'
    } else {
        document.getElementById('visor-dados').innerHTML += '0'
    }
});
document.getElementById('btn-ponto').addEventListener('click', () => {
    if (Number.parseFloat(document.getElementById('visor-dados').innerHTML) == 0 && inicio) {
        document.getElementById('visor-dados').innerHTML = '0.'
        inicio = false
    } else if (!existePonto()) {
        document.getElementById('visor-dados').innerHTML += '.'
    }
});
document.getElementById('btn-limpar').addEventListener('click', () => {
    document.getElementById('visor-dados').innerHTML = '0.00'
    document.getElementById('visor-total').innerHTML = '0.00'
    seSomar = false
    seSubtrair = false
    seDividir = false
    seMultiplicar = false
    inicio = true
});
document.getElementById('btn-somar').addEventListener('click', () => {
    if (document.getElementById('visor-dados').innerHTML == '-') {
        document.getElementById('visor-dados').innerHTML = ''  
    } else {
        document.getElementById('visor-total').innerHTML = soma()
        document.getElementById('visor-dados').innerHTML = '0.00'
    }
    seSomar = true
    seSubtrair = false
    seDividir = false
    seMultiplicar = false
    inicio = true
});
document.getElementById('btn-subtrair').addEventListener('click', () => {
    if (document.getElementById('visor-dados').innerHTML == '-' || document.getElementById('visor-dados').innerHTML == '0.00') {
        document.getElementById('visor-dados').innerHTML = '-'
    } else {
        document.getElementById('visor-total').innerHTML = subtrai()
        document.getElementById('visor-dados').innerHTML = '0.00'
    }
    seSomar = false
    seSubtrair = true
    seDividir = false
    seMultiplicar = false
    inicio = true
});
document.getElementById('btn-dividir').addEventListener('click', () => {  
    if (document.getElementById('visor-dados').innerHTML == '-') {
        document.getElementById('visor-dados').innerHTML = ''  
    } else {
        document.getElementById('visor-total').innerHTML = dividi()
        document.getElementById('visor-dados').innerHTML = '0.00'
    }
    seSomar = false
    seSubtrair = false
    seDividir = true
    seMultiplicar = false
    inicio = true
});
document.getElementById('btn-multiplicar').addEventListener('click', () => {  
    if (document.getElementById('visor-dados').innerHTML == '-') {
        document.getElementById('visor-dados').innerHTML = ''  
    } else {
        document.getElementById('visor-total').innerHTML = multiplica()
        document.getElementById('visor-dados').innerHTML = '0.00'
    }
    seSomar = false
    seSubtrair = false
    seDividir = false
    seMultiplicar = true
    inicio = true
});
document.getElementById('btn-igual').addEventListener('click', () => {
    if (seSomar) {
        document.getElementById('visor-total').innerHTML = soma()
        document.getElementById('visor-dados').innerHTML = '0.00'
    }else if (seSubtrair) {
        document.getElementById('visor-total').innerHTML = subtrai()
        document.getElementById('visor-dados').innerHTML = '0.00'
    }else if (seDividir) {
        document.getElementById('visor-total').innerHTML = dividi()
        document.getElementById('visor-dados').innerHTML = '0.00'
    }else if (seMultiplicar) {
        document.getElementById('visor-total').innerHTML = multiplica()
        document.getElementById('visor-dados').innerHTML = '0.00'
    }
    seSomar = false;
    seSubtrair = false;
    seDividir = false;
    seMultiplicar = false;
    digitouNumero = false;
    inicio = true
});