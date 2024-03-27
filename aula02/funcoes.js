let num1 = 2
const num2 = 3
var msg = "Olá amigos, esse é o numero:"

console.log(msg,num1)
console.log(num1 + num2)
console.log(typeof num1)
console.log(typeof msg)

function somar () {
    n1 = 2 
    n2 = 5
    console.log("o resultado é:", n1 + n2)
}

somar ()
somar ()

function SomarComParametros (n1 , n2) {
        let resultado = "o resultado é:" + (n1 + n2)
        console.log(resultado)
}

SomarComParametros (16,30) 
SomarComParametros (30,60)

const Teste = (n) => {
    let result = n % 2

    if (result == 1) {
        return "Numero impar"
    } else {
        return "Numero par"
    }
}

console.log (Teste (2))
console.log (Teste (7))
console.log (Teste (165))
Teste (5)
