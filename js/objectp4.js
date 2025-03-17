const Pessoa={
    nome:"",
    idade:"",
    getNome: function(){
        return this.nome;
    },
    getIdade: function(){
        return this.idade;
    },
    setNome: function(nome){
        this.nome = nome;
    },
    setIdade: function(idade){
        this.idade = idade;
    }
}

btnAdicionar = document.getElementById('btn_add');
const res = document.getElementsByClassName('res')[0];

let pessoas = []

btnAdicionar.addEventListener("click", (evt)=>{
        
    const campoNome = document.getElementById('f_nome');
    const campoIdade = document.getElementById('f_idade');

    Pessoa.setNome(campoNome.value);
    Pessoa.setIdade(campoIdade.value);
    pessoas.push(Pessoa);

    if(Pessoa.getNome() == ""){
        alert("Preencha seu nome")
    } else if(Pessoa.getIdade() == ""){
        alert("Preencha sua idade");
    } else {
        campoNome.value = "";
        campoIdade.value = "";
        campoNome.focus();
        addPessoa();
    }

})

document.addEventListener("keydown", (evt)=>{
    if(evt.key === "Enter"){

        const campoNome = document.getElementById('f_nome');
        const campoIdade = document.getElementById('f_idade');

        Pessoa.setNome(campoNome.value);
        Pessoa.setIdade(campoIdade.value);
        pessoas.push(Pessoa);


        if(Pessoa.getNome() == ""){
            alert("Preencha seu nome")
        } else if(Pessoa.getIdade() == ""){
            alert("Preencha sua idade");
        } else {
            campoNome.value = "";
            campoIdade.value = "";
            campoNome.focus();
            addPessoa();
        }
    }
})

const addPessoa=()=>{
    const div = document.createElement('div');

    pessoas.map((p)=>{
        div.innerHTML = `Nome : ${p.getNome()} Idade : ${p.getIdade()}`;
        div.setAttribute("class", "pessoa");
        res.appendChild(div);
    })
}