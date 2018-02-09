import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

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
  hospitais=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  
   this.http
      .get<any>('http://localhost:3000/hospital')
      .subscribe((resposta) => {
        this.hospitais = resposta;
      });
  }


   

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardPage');
  }

}
