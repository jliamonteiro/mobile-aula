var sage = { nome: "Sage", vida: 1900 };
var arana = { nome: "Arana", vida: 1000, arma: "AK47" };
var listaPersonagem;
listaPersonagem = [sage, arana, { nome: "pimenta", vida: 85 }];
listaPersonagem.push({ nome: "Leon kennedy", vida: 87, arma: "Pistolinha" });
console.log(listaPersonagem);
sage.nome = "Abroba";
console.log(listaPersonagem);
console.log("chaves: ");
console.log(Object.keys(sage));
console.log(Object.keys(arana)); //essas keys vão passar os atributos tipo nome e vida
console.log("valores: ");
console.log(Object.values(sage));
console.log(Object.values(arana)); // nome: "Sage", vida: 1900
console.log("Entries: ");
console.log(Object.entries(sage));
console.log(Object.entries(arana)); // retorna tudo tanto chave quanto valor
for (var chave in sage) { //interando no objeto sage
    console.log("Chave: ", chave);
}
for (var _i = 0, listaPersonagem_1 = listaPersonagem; _i < listaPersonagem_1.length; _i++) { //interando na lista personagem
    var valor = listaPersonagem_1[_i];
    console.log("Chave: ", valor);
}
