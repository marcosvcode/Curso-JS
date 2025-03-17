const Nave = function(energia){
    this.energia = energia;
    this.disparos = 100;
    // this.teste=function(){

    // }
}

const n1 = new Nave(50);

Nave.prototype.vidas = 3;
Nave.prototype.disparar=function(){
    if(this.disparos > 0){
        this.disparos--;
    }
}

console.log(Nave);
console.log(n1);
console.log(n1.disparos);
n1.disparar();
n1.disparar();
n1.disparar();
n1.disparar();
n1.disparar();
console.log(n1.disparos);
