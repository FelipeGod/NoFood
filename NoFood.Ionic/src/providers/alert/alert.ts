import { Injectable } from '@angular/core';
import { AlertController, ToastController } from 'ionic-angular';
import { text } from '@angular/core/src/render3/instructions';

@Injectable()
export class AlertProvider {

  constructor(
    private alertsCtrl: AlertController,
    private toastCtrl: ToastController
    ) {
  }

  toast(title: string, position: string): void{
    this.toastCtrl.create({
      message: title,
      position: position,
      duration: 3000
    }).present();
  }

  alert(title: string, message: string): void{
    this.alertsCtrl.create({
      title: title,
      message: message,
      buttons: ['Ok'],
      enableBackdropDismiss: false
    }).present();
  }

  confirm(title: string, message: string, callback: any): void{
    this.alertsCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: 'Não',
          role: 'Cancel',
          handler:()=>{
            console.log('Não');
            
          }
        },
        {
          text: 'Sim',
          handler:()=>{
            callback();
          }
        }
      ]
    }).present();
  }

}
