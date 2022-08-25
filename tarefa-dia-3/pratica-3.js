
// Exibir numeros impares

//let numero = 16
let n = 16 // entrada do usuario
let i = 1

while (i <= n) {
    let ehImpar = i % 2 != 0
    if (ehImpar)
    console.log(`${i}`)
    i=i+1
}
