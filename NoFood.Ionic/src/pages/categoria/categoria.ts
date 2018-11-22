import { UsuarioProvider } from './../../providers/usuario/usuario';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private UserP: UsuarioProvider,
    private LoadingCtrl: LoadingController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriaPage');
  }

  gerenciarCategoria(): void {
    this.navCtrl.push('AdmCategoriasPage');
  }

   async deslogar(): Promise<any>{
    UsuarioProvider.RemoveLogin();
    await this.LoadingCtrl.create({
      content: 'Deslogando...',
      duration: 1000
    }).present();
     this.navCtrl.setRoot('LoginPage');
  }

}
