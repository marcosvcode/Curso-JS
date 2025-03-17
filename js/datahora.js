const divData = document.getElementById('data');

const data = new Date();

// console.log(Date.now()); //Timestamp

// console.log(`Mês : ${data.getMonth()}`)

// console.log(data.toDateString());

// console.log(data.getTime());

let diaMes = data.getDate();
diaMes = diaMes < 10 ? "0"+diaMes : diaMes;

let mes = data.getMonth();
mes = mes < 10 ? "0"+mes : mes;

const dataString = diaMes+"/"+mes+"/"+data.getFullYear();

divData.innerHTML = dataString

console.log(dataString);
console.log(mes)
