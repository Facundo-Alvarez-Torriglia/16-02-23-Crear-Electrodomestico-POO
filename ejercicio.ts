/* Ejercicio:
Crear la clase Electrodomestico con las siguientes caracteristicas: nombre, precio base, color, consumo energetico y peso
La funcionalidad de la clase debe ser:
-Todos los metodos get y set --> ESTE PUNTO TODAVIA NO LO COMENTAMOS EN CLASE ASIQUE LO PUEDEN DEJAR PENDIENTE
-Comprobar si el electrodomestico es de bajo consumo (valor booleano) --> Ayuda: comparen el consumoEnergetico contra un valor cualquier (ejemplo 100). FUNCION CON RETORNO BOOLEANO
-Calcular el balance (costo dividido peso) --> Ayuda: this.precioBase/this.peso en funcion con retorno Number
-Indicar si es un producto de alta gama(balance mayor que 3). Ayuda --> calculen el balance y luego hacen  if balance > 3 --> funcion con retorno booleno/funcion void con console.log */

class Electrodomestico {
    //Estado
    public nombre: string ='';
    public precioBase: number = 15000; 
    public color: string = '';
    public consumo: number = 150; 
    public peso: number = 3 ;

    //Funciones 
     public bajoConsumo (): void { 
        let auxiliar:boolean = false;
        if(this.consumo < 100) {
            auxiliar= false;
        } else {
            auxiliar = true
        }
        console.log (auxiliar);
    }

    public calcularGama: number = 0 ; 

    public balance (): number {
        this.calcularGama = this.precioBase/this.peso;
        return this.calcularGama;
        console.log(this.calcularGama); //para ver por salida
    }

    public altaGama (): boolean {
        let auxiliar2: boolean = true
        if (this.calcularGama > 3){
            auxiliar2 = true;
        } else {
            auxiliar2 = false
        }
        return auxiliar2;
        console.log (auxiliar2);
    }
}