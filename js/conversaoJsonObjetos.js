const pessoa = {
    nome : "Bruno",
    canal : "CFB Cursos",
    curso : "Javascript",
    aulas : {
        aula01 : "Introdução",
        aula02 : "Variáveis",
        aula03 : "Condicional"
    }
}

// console.log(pessoa);
// console.log(pessoa.nome);
// console.log(pessoa.aulas);
// console.log(pessoa.aulas.aula01);

const string_pessoa = '{"nome":"Bruno","canal":"CFB Cursos","curso":"Javascript","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"Condicional"}}';

const s_json_pessoa = JSON.stringify(pessoa);
const o_json_pessoa = JSON.parse(s_json_pessoa);

console.log(s_json_pessoa); // converte objeto em string JSON
console.log("---------------------------------------------------");
console.log(o_json_pessoa); // convert string JSON em objeto
console.log("---------------------------------------------------");
console.log(pessoa);