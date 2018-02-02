import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RaioPage } from '../raio/raio';
import { HttpClient } from '@angular/common/http/';

/**
 * Generated class for the ConfirmacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmacao',
  templateUrl: 'confirmacao.html',
})
export class ConfirmacaoPage {

 cep;
 valor;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public http: HttpClient) {
    this.http
    .get<any>(`https://viacep.com.br/ws/${this.navParams.get("cep")}/json/`)
    .subscribe((resposta) => {
      this.valor = resposta.logradouro
    });
  

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmacaoPage');
  }

  


    irParaRaio(){
  this.navCtrl.push(RaioPage);
  }
}

