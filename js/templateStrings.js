const caixa = document.querySelector("#caixa");

const carros=["Polo", "Golf", "T-Cross", "HRV"];

let ol = `<ul>`;
carros.map((el)=>{
    ol+=`<li>${el}</li>`;
});
ol+`</ul>`

const curso = "Javascript";
const canal = "CFB Cursos";
// const frase = "Este é o curso de " + curso + " do canal " + canal;
const frase = `Este é o<br/> curso de ${curso}</br> do canal ${canal}`;

caixa.innerHTML = ol;