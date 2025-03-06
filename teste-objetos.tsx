interface Personagem  {
    nome: string
    vida: number
    arma ?: string
}
    



let sage  : Personagem = { nome: "Sage", vida: 1900}

let arana : Personagem =  {nome: "Arana", vida: 1000, arma: "AK47"}

let listaPersonagem: Personagem[]

listaPersonagem = [sage, arana, {nome: "pimenta", vida: 85} ]

listaPersonagem.push({nome: "Leon kennedy", vida: 87, arma: "Pistolinha"})
console.log(listaPersonagem);

sage.nome = "Abroba"
console.log(listaPersonagem);


console.log("chaves: ")
console.log(Object.keys(sage))
console.log(Object.keys(arana)) //essas keys vão passar os atributos tipo nome e vida

console.log("valores: ")
console.log(Object.values(sage))
console.log(Object.values(arana)) // nome: "Sage", vida: 1900

console.log("Entries: ")
console.log(Object.entries(sage))
console.log(Object.entries(arana)) // retorna tudo tanto chave quanto valor


for (const chave in sage){ //interando no objeto sage
    console.log("Chave: ", chave)
}

for (const valor of listaPersonagem){ //interando na lista personagem
    console.log("Chave: ", valor)
}