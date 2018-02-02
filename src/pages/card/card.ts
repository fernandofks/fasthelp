import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SaudeProvider } from '../../providers/saude/saude';

/**
 * Generated class for the CardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage {
  hospitais
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider:SaudeProvider) {
    this.hospitais = provider.hospitais;  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardPage');
  }

}
