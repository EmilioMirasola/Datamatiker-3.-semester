const personObjekter = [
    {navn: "Emilio", alder: 23},
    {navn: "Filippa", alder: 18},
    {navn: "Erminia", alder: 20},
    {navn: "Riccardo", alder: 52},
    {navn: "Lisa", alder: 51},
];


console.log(personObjekter[0].navn)
personObjekter[0].navn = "TEST";
console.log(personObjekter)

delete personObjekter[0].navn
console.log(personObjekter)

