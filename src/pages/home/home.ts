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
  dados={};

  constructor(public navCtrl: NavController) {

  }

  irParaConfirmacao(){

    this.navCtrl.push(ConfirmacaoPage, this.dados);
  


  }

  irParaPreencher(){
    this.navCtrl.push(PreencherPage);
  }



}
