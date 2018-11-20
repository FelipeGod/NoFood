import { CameraProvider } from './../../providers/camera/camera';
import { CategoriaModel } from './../../app/models/categoriaModel';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-adm-categoria',
  templateUrl: 'adm-categoria.html',
})
export class AdmCategoriaPage {
  categoria: CategoriaModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public paltform: Platform,
    private cameraSrv: CameraProvider
    ) {
      
      let _categ = this.navParams.get('_categoria');
      if (_categ) {
        this.categoria = <CategoriaModel>_categ;
      }else{
        this.categoria = new CategoriaModel();
      }
  }

  public getPictureOptions(): void{
   let actionSheet =  this.actionSheetCtrl.create({
     title: 'Adicionar foto',
     buttons: [
       {
         text: 'Tirar foto',
         handler: () => {
           this.cameraSrv.takePicture(photo => {
             this.categoria.foto = photo;
           });
         },
         icon: this.paltform.is('ios') ? null : 'camera'
       },
       {
         text: 'Pegar da galeria',
         handler: () => {
           this.cameraSrv.getPictureFromGalery(photo => {
             this.categoria.foto = photo;
           });
         },
         icon: this.paltform.is('ios') ? null : 'images'
       },
       {
         text: 'Cancelar',
         role: 'destructive',
         handler: () => { },
         icon: this.paltform.is('ios') ? null : 'close'
       }
     ]
   }).present();
  }


}
