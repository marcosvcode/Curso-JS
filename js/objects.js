class Carro{
    canal="Youtube"
    constructor(pnome, ptipo){
        this.nome = pnome;
        if(ptipo ==1){
            this.tipo = "Esportivo";
            this.velmax = 300;
        }else if(ptipo == 2){
            this.tipo = "Utilitário";
            this.velmax = 100;
        }else if(ptipo == 3){
            this.tipo = "Passeio";
            this.velmax = 160;
        } else {
            this.tipo = "Militar";
            this.velmax = 180;
        }
    }
    getNome(){
        return this.nome;
    };
    getTpo(){
        return this.tipo;
    };
    getVelMax(){
        return this.velMax;
    };
    getInfo(){
        return [this.nome, this.tipo, this.velmax];
    };
    setNome(nome){
        this.nome = nome;
    };
    setTipo(tipo){
        this.tipo = tipo;
    };
    setVelMax(velMax){
        this.velmax = velMax;
    }
    info(){
        console.log(`Nome .: ${this.nome}`);
        console.log(`Tipo .: ${this.tipo}`);
        console.log(`Velocidade Máxima .: ${this.velmax}`);
        console.log(`Canal ${this.canal}`);
        console.log("-------------------------------")
    }
}

let c1 = new Carro("Mcqueen", 1);
let c2 = new Carro("Super Luxo", 2);
let c3 = new Carro("Bombadão", 4);
let c4 = new Carro("C4", 3);

c1.setNome("Como é veloz");
c1.setTipo(2);
c1.setVelMax(320);

// console.log("Carro : " + c1.nome + " Tipo : " + c1.tipo + " Velocidade : " + c1.velmax);
// console.log(c2.nome);
// console.log(c3.nome);

console.log(c1.getInfo());
c2.info();