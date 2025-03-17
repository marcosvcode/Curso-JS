class NPC {
    static alerta=false;
    constructor(energia){
        this.energia = energia;
    }

    info = function(){
        console.log(`Energia : ${this.energia}`)
        console.log(`Alerta : ${(NPC.alerta?"Sim":"Não")}`)
        console.log("------------------")
    }

    static alertar = function(){
        NPC.alerta = true
    }
}

const npc1 = new NPC(100);
const npc2 = new NPC(50);
const npc3 = new NPC(30);

// console.log(npc1.energia);
// console.log(npc2.energia);
// console.log(npc3.energia);

// NPC.alerta = true;

NPC.alertar();

npc1.info();
npc2.info();
npc3.info();