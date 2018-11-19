import { AlertProvider } from './../alert/alert';
import { SpinnerProvider } from './../spinner/spinner';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpResultModel } from '../../app/models/HttpResultModel';
import { NetworkProvider } from '../network/network';

@Injectable()
export class HttpProvider {

  constructor(
    private http: HttpClient,
    private spinnerSrv: SpinnerProvider,
    private alerSrv: AlertProvider,
    private networkSrv: NetworkProvider
    ) {
    
  }

  public get(url: string): Promise<httpResultModel>{
    this.spinnerSrv.Show("Carregando os dados...");
    return  new Promise((resolve) => {
      if (this.networkSrv.isOnline) {
        this.http.get(url)
        .subscribe(_res => {
          this.spinnerSrv.Hide();
          resolve({ success: true, data: _res, err: undefined});
        }, err => {
          this.spinnerSrv.Hide();
          this.alerSrv.toast('Não foi possível consultar  os dados, verifique sua conexão e tente novamente', 'bottom');
          resolve({ success: false, data: undefined, err: err })
        });
      } else {
        this.alerSrv.toast('Você está offline, e infelizmente não podem ser carregados os dados!', 'bottom');
        resolve({ success: true, data: [], err: undefined });
      }
    })
  }

  public post(url: string, model: any): Promise<httpResultModel> {
    this.spinnerSrv.Show("Carregando os dados...");
    return new Promise((resolve) => {
      if (this.networkSrv.isOnline) {
        this.http.post(url, model)
        .subscribe(_res => {
          this.spinnerSrv.Hide();
          resolve({ success: true, data: _res, err: undefined });
        }, err => {
          this.spinnerSrv.Hide();
          console.log(err);
          if (err.status == 400) {
            let msg = '';
            err.error.validation.forEach(_err => {
              msg += `<li>${ _err.message }</li>`
            });
            this.alerSrv.alert(err.error.message, msg);
          }else{
            this.alerSrv.toast('Não foi possível realizar o processamento da informação, verifique sua conexão e tente novamente', 'bottom');
            resolve({ success: false, data: undefined, err: err });
          }
        });
      } else {
        this.alerSrv.toast('Você está offline, e infelizmente não pode ser enviado os dados!', 'bottom');
        resolve({ success: true, data: [], err: undefined });
      }
    })
  }

  public put(url: string, model: any): Promise<httpResultModel> {
    this.spinnerSrv.Show("Atualizando os dados...");
    return new Promise((resolve) => {
      if (this.networkSrv.isOnline) {
        this.http.put(url, model)
          .subscribe(_res => {
            this.spinnerSrv.Hide();
            resolve({ success: true, data: _res, err: undefined });
          }, err => {
            this.spinnerSrv.Hide();
            console.log(err);
            if (err.status == 400) {
              let msg = '';
              err.error.validation.forEach(_err => {
                msg += `<li>${_err.message}</li>`
              });
              this.alerSrv.alert(err.error.message, msg);
            }else if(err.status == 404){
              this.alerSrv.alert('Informação', err.error.message);
            }else{
              this.alerSrv.toast('Não foi possível realizar o processamento da informação, verifique sua conexão e tente novamente', 'bottom');
              resolve({ success: false, data: undefined, err: err });
            }
          });
      } else {
        this.alerSrv.toast('Você está offline, e infelizmente não pode ser enviado os dados!', 'bottom');
        resolve({ success: true, data: [], err: undefined });
      }
    })
  }

  public delete(url: string): Promise<httpResultModel> {
    this.spinnerSrv.Show("Removendo registro...");
    return new Promise((resolve) => {
      if (this.networkSrv.isOnline) {
        this.http.delete(url)
          .subscribe(_res => {
            this.spinnerSrv.Hide();
            resolve({ success: true, data: _res, err: undefined });
          }, err => {
            this.spinnerSrv.Hide();
            this.alerSrv.toast('Não foi possível realizar a exclusão do registro!', 'bottom');
            resolve({ success: false, data: undefined, err: err })
          });
      } else {
        this.alerSrv.toast('Você está offline, e infelizmente não pode ser enviado os dados!', 'bottom');
        resolve({ success: true, data: [], err: undefined });
      }
    })
  }

}
