import { ListaItem } from './lista-item';


export class Lista {
    nombre: string;
    terminada: boolean;
    items: ListaItem[];

    constructor(nombre) {
        this.nombre = nombre;
        this.terminada = false;

    }
}