function Pessoa(pnome, pidade){
    
    this.nome = pnome,
    this.idade = pidade,

    this.getNome=function(){
        return this.nome;
    };
    this.getIdade=function(){
        return this.idade;
    };
    this.setNome=function(nome){
        this.nome = nome;
    };
    this.setIdade=function(idade){
        this.idade = idade;
    };

    this.info=function(){
        console.log(`Nome .: ${this.nome}`);
        console.log(`Idade .: ${this.idade}`);
        console.log("-------------------------------")
    }
}

let pessoas = []

const btnAdicionar = document.querySelector('#btn_add');
const res = document.querySelector('.res');

const addPessoa =()=>{
    res.innerHTML = "";
    pessoas.map((p)=>{
        const div = document.createElement('div');
        div.setAttribute("class", "pessoa");
        div.innerHTML = `Nome : ${p.getNome()} <br/> Idade : ${p.getIdade()}`;
        res.appendChild(div);
    })
}

btnAdicionar.addEventListener("click", (evt)=>{
    const nome = document.querySelector('#f_nome');
    const idade = document.querySelector('#f_idade');
    const pessoa = new Pessoa(nome.value, idade.value);
    pessoas.push(pessoa);
    nome.value = '';
    idade.value = '';
    nome.focus();
    addPessoa();
}
)