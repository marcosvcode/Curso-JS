const tipoMilitar = document.querySelector('#f_tipoMilitar');
const tipoNormal = document.querySelector('#f_tipoNormal');
const tipoCorrida = document.querySelector('#f_tipoCorrida');
const blindagem = document.querySelector('#f_blindagem');
const municao = document.querySelector('#f_municao');
const nome = document.querySelector('#f_nome');
const portas = document.querySelector('#f_portas');
const velocidade = document.querySelector('#f_velocidade');
const carros = document.querySelector('#carros');
const btnAddCarro = document.querySelector('#btn_addCarro');

let a_carros = [];

const removerCarro=(quem)=>{
    a_carros = a_carros.filter((el)=>{
        console.log(el.nome);
        return (el.nome!=quem)
    })
}

tipoMilitar.addEventListener("click", ()=>{
    limparCampos();
    blindagem.removeAttribute("disabled");
    municao.removeAttribute("disabled");
    portas.removeAttribute("disabled");
    velocidade.setAttribute("disabled", "disabled");
});

tipoNormal.addEventListener("click", ()=>{
    limparCampos();
    blindagem.setAttribute("disabled", "disabled");
    municao.setAttribute("disabled", "disabled");
    velocidade.setAttribute("disabled", "disabled");
    portas.removeAttribute("disabled");
});

tipoCorrida.addEventListener("click", ()=>{
    limparCampos();
    municao.setAttribute("disabled", "disabled");
    portas.setAttribute("disabled", "disabled");
    blindagem.setAttribute("disabled", "disabled");
    velocidade.removeAttribute("disabled");
})

const gerenciarExibicaoCarros=()=>{
    carros.innerHTML = "";
    a_carros.forEach((c)=>{
        const div = document.createElement("div");
        const btn = document.createElement("button");
        btn.innerHTML = "Remover";
        btn.addEventListener("click", (evt)=>{
            const quemRemover = evt.target.parentNode.dataset.nome;
            removerCarro(quemRemover);
            // console.log(a_carros)
            gerenciarExibicaoCarros();
        })
        div.setAttribute("class", "carro");
        div.setAttribute("data-nome", c.nome)

        if(tipoNormal.checked){
            div.innerHTML = `Nome : ${c.nome} <br/> ${c.portas} portas`;
        } else if(tipoMilitar.checked) {
            div.innerHTML = `Nome : ${c.nome} <br/> ${c.portas} portas <br/> Blindagem : ${c.blindagem} <br/> Munição : ${c.municao}`
        } else if(tipoCorrida.checked) {
            div.innerHTML = `Nome : ${c.nome} <br/> Velocidade : ${c.velocidade} KM/H`;
        }

        div.appendChild(btn);
        carros.appendChild(div);
    })
}

const limparCampos =()=>{
    blindagem.value = 0;
    portas.value = 0;
    municao.value = 0;
    velocidade.value = 0;
    nome.value = "";
}

btnAddCarro.addEventListener("click", ()=>{
    if(tipoNormal.checked){
        const c = new Carro(nome.value, portas.value)
        a_carros.push(c);
    } else if(tipoMilitar.checked) {
        const c = new Militar(nome.value, portas.value, blindagem.value, municao.value);
        a_carros.push(c);
    } else if(tipoCorrida.checked) {
        const c = new Corrida(nome.value, velocidade.value);
        a_carros.push(c);
    }

    gerenciarExibicaoCarros();

    limparCampos();
})

class Carro { // Classe pai // classe base
    constructor(nome, portas){
        this.nome = nome;
        this.portas = portas;
        this.ligado = false;
        this.velocidade = 0;
        this.cor = undefined;
    }   
    ligar=function(){
        this.ligado = true;
    }
    desligar=function(){
        this.ligado = false;
    }
    setCor=function(cor){
        this.cor = cor;
    }
    acelerar=function(){
        this.velocidade += 10;
    }
}

class Militar extends Carro { // classe filho
    constructor(nome, portas, blindagem, municao){
        super(nome, portas);
        this.blindagem = blindagem;
        this.municao = municao;
        this.setCor("Green");
    }
    atirar=function(){
        if(this.municao > 0){
            this.municao--;
        }
    }
}

class Utilitario extends Carro {
    constructor(nome, portas, lugares){
        super(nome, portas);
        this.lugares = lugares;
    }
}

class Corrida extends Carro {
    constructor(nome, velocidade){
        super(nome);
        this.velocidade = velocidade;
    }
    acelerar=function(){
        velocidade++;
    }
}

// const c1 = new Carro("Gol", "4");
// c1.ligar();
// c1.setCor("Black");

// console.log(`Nome : ${c1.nome}`);
// console.log(`Portas  : ${c1.portas}`);
// console.log(`Ligado  : ${c1.ligado}`);
// console.log(`Velocidade  : ${c1.velocidade}`);
// console.log(`Cor  : ${c1.cor}`);
// console.log("-------------------------------");

// const c2 = new Militar("Tanque", 1, 75, 125);
// c2.setCor("Blue");
// c2.acelerar();

// console.log(`Nome : ${c2.nome}`);
// console.log(`Portas  : ${c2.portas}`);
// console.log(`Ligado  : ${c2.ligado}`);
// console.log(`Velocidade  : ${c2.velocidade}`);
// console.log(`Munição : ${c2.municao}`);
// console.log(`Blindagem : ${c2.blindagem}`);
// console.log(`Cor  : ${c2.cor}`);
// console.log("-------------------------------");

// c2.acelerar();
// c2.acelerar();
// c2.acelerar();
// c2.acelerar();
// c2.acelerar();
// c2.acelerar();
// c2.acelerar();
// c2.acelerar();
// c2.acelerar();
// c2.acelerar();

// c2.atirar();
// c2.atirar();
// c2.atirar();
// c2.atirar();
// c2.atirar();
// c2.atirar();
// c2.atirar();
// c2.atirar();
// c2.atirar();
// c2.atirar();

// console.log(`Nome : ${c2.nome}`);
// console.log(`Portas  : ${c2.portas}`);
// console.log(`Ligado  : ${c2.ligado}`);
// console.log(`Velocidade  : ${c2.velocidade}`);
// console.log(`Munição : ${c2.municao}`);
// console.log(`Blindagem : ${c2.blindagem}`);
// console.log(`Cor  : ${c2.cor}`);
// console.log("-------------------------------");