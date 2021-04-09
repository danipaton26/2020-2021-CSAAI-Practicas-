class counter {

    //-- Constructor del objeto
    //-- Inicializacion de las propiedades
    constructor(display) {

        //-- Valor del contador
        this.valor = 0;

        //-- Almacenar su display
        this.display = display;
    }

    //-- Método inc para actualizar el contador
    //-- Y mostrarlo en el display
    inc(value) {
        this.valor += value;
        this.display.innerHTML = this.valor;
    }
}