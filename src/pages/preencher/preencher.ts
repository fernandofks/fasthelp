import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SaudeProvider } from '../../providers/saude/saude';
import { HomePage } from '../home/home';


/**
 * Generated class for the PreencherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preencher',
  templateUrl: 'preencher.html',
})
export class PreencherPage {

  hospital = {}

  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: SaudeProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreencherPage');
  }


  inserirDados(){
    this.provider.hospitais.push(this.hospital)
    console.log(this.provider.hospitais);
  }

  irParaHome(){
    this.navCtrl.push(HomePage);
  }

}
