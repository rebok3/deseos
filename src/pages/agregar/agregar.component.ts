import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/clases/index';

import { ListaDeseosService } from '../../app/services/lista-deseos.service';


@Component({
    selector: 'app-agregar',
    templateUrl: './agregar.component.html'
})
export class AgregarComponent implements OnInit {

    nombreLista: string = "";
    nombreItem: string = "";

    items: ListaItem[] = [];

    constructor(
        public alertCtrl: AlertController,
        public navCtrl: NavController,
        public _listaDeseos: ListaDeseosService
    ) { }

    ngOnInit(): void { }

    agregar() {
        if ( this.nombreItem.length == 0 ) {
            return;
        }

        let item = new ListaItem();
        item.nombre = this.nombreItem;

        this.items.push( item );
        this.nombreItem = "";
    }

    borrarItem( idx: number) {
        this.items.splice(idx,1);
    }

    guardarLista() {
        if ( this.nombreLista.length < 1 ) {
            this.showAlert();
        } else {
            let lista = new Lista( this.nombreLista );
            lista.items = this.items;
            
            this._listaDeseos.listas.push( lista );
            this.navCtrl.pop();
        }        
    }

    showAlert() {
            let alert = this.alertCtrl.create({
                title: 'Guardar Lista',
                subTitle: 'El nombre de la lista es necesario',
                buttons: ['OK']
            });
            alert.present();        
    }
}
