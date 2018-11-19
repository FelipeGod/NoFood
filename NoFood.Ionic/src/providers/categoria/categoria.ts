import { HttpProvider } from './../http/http';
import { Injectable } from '@angular/core';
import { ProviderBase } from '../../app/base/provider-base';
import { CategoriaModel } from '../../app/models/categoriaModel';
import { ConfigHelper } from '../../app/helpers/confighelper';

@Injectable()
export class CategoriaProvider extends ProviderBase<CategoriaModel>{

  url: string = `${ConfigHelper.Url}categoria`;

  constructor(public http: HttpProvider) {
    super(`${ConfigHelper.Url}categoria`, http);
  }

}
