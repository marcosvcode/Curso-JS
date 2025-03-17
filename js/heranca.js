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

const c1 = new Carro("Gol", "4");
c1.ligar();
c1.setCor("Black");

console.log(`Nome : ${c1.nome}`);
console.log(`Portas  : ${c1.portas}`);
console.log(`Ligado  : ${c1.ligado}`);
console.log(`Velocidade  : ${c1.velocidade}`);
console.log(`Cor  : ${c1.cor}`);
console.log("-------------------------------");

const c2 = new Militar("Tanque", 1, 75, 125);
c2.setCor("Blue");
c2.acelerar();

console.log(`Nome : ${c2.nome}`);
console.log(`Portas  : ${c2.portas}`);
console.log(`Ligado  : ${c2.ligado}`);
console.log(`Velocidade  : ${c2.velocidade}`);
console.log(`Munição : ${c2.municao}`);
console.log(`Blindagem : ${c2.blindagem}`);
console.log(`Cor  : ${c2.cor}`);
console.log("-------------------------------");

c2.acelerar();
c2.acelerar();
c2.acelerar();
c2.acelerar();
c2.acelerar();
c2.acelerar();
c2.acelerar();
c2.acelerar();
c2.acelerar();
c2.acelerar();

c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();

console.log(`Nome : ${c2.nome}`);
console.log(`Portas  : ${c2.portas}`);
console.log(`Ligado  : ${c2.ligado}`);
console.log(`Velocidade  : ${c2.velocidade}`);
console.log(`Munição : ${c2.municao}`);
console.log(`Blindagem : ${c2.blindagem}`);
console.log(`Cor  : ${c2.cor}`);
console.log("-------------------------------");