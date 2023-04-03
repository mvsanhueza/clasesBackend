export class Pokemon {
    constructor(id, nombre, tipo, vida, ataque){
        this.id = id; //Mi propiedad id es igual al id del parametro
        this.nombre = nombre; 
        this.tipo = tipo;
        this.vida = vida;
        this.ataque = ataque;
        this.nivel = 1;
    }

    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y te estoy saludando`);
    }
}

export class Pikachu extends Pokemon{ //Relacion es un
    constructor(id, nombre, tipo, vida, ataque, damageImpactrueno){
        super(id, nombre, tipo, vida, ataque); //Llama al constructor de la clase padre
        this.damageImpactrueno = damageImpactrueno;
    }

    impactotrueno(){
        console.log(`${this.nombre} ha usado impactrueno y ha causado ${this.damageImpactrueno} de daño`);
    }
    
}

//export default Pikachu; //Esto para exportar un elemento del archivo