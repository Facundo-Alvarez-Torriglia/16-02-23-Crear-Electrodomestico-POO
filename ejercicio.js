/* Ejercicio:
Crear la clase Electrodomestico con las siguientes caracteristicas: nombre, precio base, color, consumo energetico y peso
La funcionalidad de la clase debe ser:
-Todos los metodos get y set --> ESTE PUNTO TODAVIA NO LO COMENTAMOS EN CLASE ASIQUE LO PUEDEN DEJAR PENDIENTE
-Comprobar si el electrodomestico es de bajo consumo (valor booleano) --> Ayuda: comparen el consumoEnergetico contra un valor cualquier (ejemplo 100). FUNCION CON RETORNO BOOLEANO
-Calcular el balance (costo dividido peso) --> Ayuda: this.precioBase/this.peso en funcion con retorno Number
-Indicar si es un producto de alta gama(balance mayor que 3). Ayuda --> calculen el balance y luego hacen  if balance > 3 --> funcion con retorno booleno/funcion void con console.log */
var Electrodomestico = /** @class */ (function () {
    function Electrodomestico() {
        //Estado
        this.nombre = '';
        this.precioBase = 15000;
        this.color = '';
        this.consumo = 150;
        this.peso = 3;
        this.calcularGama = 0;
    }
    //Funciones 
    Electrodomestico.prototype.bajoConsumo = function () {
        var auxiliar = false;
        if (this.consumo < 100) {
            auxiliar = false;
        }
        else {
            auxiliar = true;
        }
        console.log(auxiliar);
    };
    Electrodomestico.prototype.balance = function () {
        this.calcularGama = this.precioBase / this.peso;
        return this.calcularGama;
        console.log(this.calcularGama); //para ver por salida
    };
    Electrodomestico.prototype.altaGama = function () {
        var auxiliar2 = true;
        if (this.calcularGama > 3) {
            auxiliar2 = true;
        }
        else {
            auxiliar2 = false;
        }
        return auxiliar2;
        console.log(auxiliar2);
    };
    return Electrodomestico;
}());
