import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RaioPage } from '../raio/raio';
import { PreencherPage } from '../preencher/preencher';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  logo = 'assets/imgs/logo1.png';
  dados={};

  constructor(public navCtrl: NavController, public http:HttpClient) {

  }

  irParaConfirmacao(){

    this.navCtrl.push(RaioPage, this.dados);

  }


  inserirDados(){
    this.http
      .post('http://localhost:3000/direcao', this.dados)
      .subscribe(() => {
        console.log('localizacao inserido!');
      });
    }


  irParaPreencher(){
    this.navCtrl.push(PreencherPage);
  }



}
