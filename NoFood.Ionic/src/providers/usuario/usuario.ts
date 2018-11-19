import { ConfigHelper } from './../../app/helpers/confighelper';
import { HttpProvider } from './../http/http';
import { UsuarioModel } from './../../app/models/usuarioModel';
import { Injectable } from '@angular/core';
import { ProviderBase } from '../../app/base/provider-base';
import { httpResultModel } from '../../app/models/HttpResultModel';

@Injectable()
export class UsuarioProvider extends ProviderBase<UsuarioModel>{

  url: string = `${ConfigHelper.Url}usuario`;

  constructor(public http: HttpProvider) {
    super(`${ConfigHelper.Url}usuario`, http);
  }

  async autenticate(email: string, senha: string): Promise<httpResultModel>{
    return this.http.post(`${ this.url }/autenticar`, { email: email, senha: senha });
  }

}
