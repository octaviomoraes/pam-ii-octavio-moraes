let n = 2
let t = "oi"

console.log (typeof n)
console.log (typeof t)

let a = [0, 1, 2, 3, 4, 5, 6, 8, 13, 21]

console.log(typeof a)

let o = {nome: "João", ideade: 36} // JSON
//JAvaScript Obeject Notation 

console.log(typeof o)

console.log(a) 
console.log(a[6])

a.forEach((el) =>
    console.log('Elemento: ${el}')
)

console.log(o)
console.log(o.nome, "tem" , o.idade)
