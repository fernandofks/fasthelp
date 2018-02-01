import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardPage } from '../card/card';

/**
 * Generated class for the RaioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-raio',
  templateUrl: 'raio.html',
})
export class RaioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RaioPage');
  }

  irParaCard(){
    this.navCtrl.push(CardPage);
  }


}
