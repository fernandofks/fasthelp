import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RaioPage } from '../raio/raio';

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

}
