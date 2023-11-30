

////generando objetos con propiedades y acciones

function Pokemon(nombre,tipo,entrenador,defensa,vida,ataque, tipoAtaque) {

///propiedades / atributos / caracteristicas
    this.nombre = nombre;
    this.tipo = tipo;
    this.entrenador = entrenador;
    this.defensa = defensa;
    this.vida = vida;
    this.ataque = ataque;
    this.tipoAtaque = tipoAtaque;

    ///acciones//comportamiento///metodos

    this.atacar = function(nombrePokemonEnemigo) {
        alert(`${this.nombre} ataca a ${nombrePokemonEnemigo} con un ataque de ${this.tipoAtaque}`);
    }

    this.evolucionar = function(nombreEvolucionado, adicionalAtaque, adicionalVida) {
        alert(`${this.nombre} esta evolucionando...`)
        this.ataque = this.ataque + adicionalAtaque;
        this.vida = this.vida + adicionalVida;
        this.nombre = nombreEvolucionado;
        alert(`Evolucion terminada, ahora se llama ${this.nombre}`);
    }

    this.recibirAtaque  = (atacante,tipoAtaque, ataqueRecibido) => {
        alert(`El atacante ${atacante} agredea ${this.nombre} con ${tipoAtaque} y una cantidad de ataque de ${ataqueRecibido}`);
        if (this.defensa < ataqueRecibido) {
            this.vida = this.vida - (ataqueRecibido - this.defensa);
            if (this.vida <= 0) {
                alert(`El pokemon ${this.nombre} se murio`);
            }else {
                alert(`${this.nombre} le queda de vida ${this.vida}`);
            }
        }else {
            alert(`El ataque fue menor a la defensa, ${this.nombre} salio ileso`);
        }
    }

}

const pokemon1 = new Pokemon('Pikachu','Electrico','Ash', 100, 250, 50, "Impactrueno");
const pokemon2 = new Pokemon("Charmander","Fuego","Melinda",0, 120, 80, "Bola de fuego");

pokemon1.atacar(pokemon2.nombre);
pokemon2.recibirAtaque(pokemon1.nombre,pokemon1.tipoAtaque,pokemon1.ataque);
pokemon1.evolucionar("Raichu",20,30);
pokemon1.atacar(pokemon2.nombre);
pokemon2.recibirAtaque(pokemon1.nombre,pokemon1.tipoAtaque,pokemon1.ataque);


