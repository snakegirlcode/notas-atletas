let objAtletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

let media = []

for (let i = 0; i < objAtletas.length; i++) {
  let novasNotas = objAtletas[i].notas.toSorted((a,b) => a - b).slice(1,4)
  let soma = novasNotas.reduce((x, y) => x + y)
  media.push(soma/novasNotas.length)
}

for (let i = 0; i < objAtletas.length; i++) {
  objAtletas[i].notas.sort();
  console.log('Nome:', objAtletas[i].nome,)
  console.log('Notas Obtidas:',objAtletas[i].notas.join(", "))
  console.log('Média Válida:', media[i])
  console.log("\n")
}
