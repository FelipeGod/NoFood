import { UsuarioProvider } from './../../providers/usuario/usuario';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private usuarioSrv: UsuarioProvider
    ) {
  }

  ionViewDidLoad() {
    this.usuarioSrv
    console.log('ionViewDidLoad LoginPage');
  }

  abrirCategoria(): void{
    this.navCtrl.setRoot('CategoriaPage');
  }

}
