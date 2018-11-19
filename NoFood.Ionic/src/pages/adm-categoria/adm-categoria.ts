import { CategoriaModel } from './../../app/models/categoriaModel';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-adm-categoria',
  templateUrl: 'adm-categoria.html',
})
export class AdmCategoriaPage {
  categoria: CategoriaModel = new CategoriaModel();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    ) {
  }

}
