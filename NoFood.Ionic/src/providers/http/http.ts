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
        this.http.get(url).subscribe(_res => {
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
}
