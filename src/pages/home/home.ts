import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RaioPage } from '../raio/raio';
import { PreencherPage } from '../preencher/preencher';
import { ConfirmacaoPage } from '../confirmacao/confirmacao';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  logo = 'assets/imgs/logo1.png';
  constructor(public navCtrl: NavController) {

  }
  irParaRaio(){
    this.navCtrl.push(RaioPage);
  }

  irParaConfirmacao(){

    this.navCtrl.push(ConfirmacaoPage);

  }

  irParaPreencher(){
    this.navCtrl.push(PreencherPage);
  }

}
