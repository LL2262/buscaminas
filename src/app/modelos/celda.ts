export class Celda{
    constructor(
        public esMina: boolean, // Indica si la celda es una mina
        public descubierta: boolean, // Indica si la celda fue descubierta
        public bandera: boolean, // Indica si en la celda se coloco una bandera
        public probabilidad: number, // Indica la cantidad de minas en los alrrededores
    ){}
}