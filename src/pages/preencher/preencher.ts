import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { HttpClient } from '@angular/common/http';


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
hospital = {};
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreencherPage');
  }

     
    


  inserirDados(){
    this.http
      .post('http://159.203.92.230:3000/hospital', this.hospital)
      .subscribe(() => {
        console.log('hospital inserido!');
      });
    }

 

  irParaHome(){
    this.navCtrl.push(HomePage);
  }

}
