import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoModel } from '../../app/models/produtoModel';
import { ProdutoProvider } from '../../providers/produto/produto';

@IonicPage()
@Component({
  selector: 'page-adm-produtos',
  templateUrl: 'adm-produtos.html',
})

export class AdmProdutosPage {

  lista: Array<ProdutoModel> = new Array<ProdutoModel>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private produtoSrv: ProdutoProvider) {

    this._loadData();

  }

  private async _loadData(): Promise<void> {
    let produtoResult = await this.produtoSrv.get();
    if (produtoResult.success) {
      this.lista = <Array<ProdutoModel>>produtoResult.data;
    }
  }

  addOrEdit(model?: ProdutoModel): void {
    this.navCtrl.push('AdmProdutoPage', { _produto: model });
  }

}
