const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

const body = document.body
const table = document.createElement('table')

const th1 = document.createElement('th')
th1.innerText = "Name"
const th2 = document.createElement('th')
th2.innerText = "Height"
const th3 = document.createElement('th')
th3.innerText = "Place"

const trHeaders = document.createElement('tr')

trHeaders.append(th1, th2, th3)
table.appendChild(trHeaders)

for (const mountain of MOUNTAINS) {
    const tr = document.createElement('tr')
    const td1 = document.createElement('td')
    const td2 = document.createElement('td')
    const td3 = document.createElement('td')

    td1.innerText = `${mountain.name}`
    td2.innerText = `${mountain.height}`
    td3.innerText = `${mountain.place}`

    tr.append(td1, td2, td3)

    table.appendChild(tr)
}

body.appendChild(table)