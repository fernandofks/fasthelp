import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RaioPage } from './raio';
import { CardPage } from '../card/card';
import { NavController } from 'ionic-angular';

@NgModule({
  declarations: [
    RaioPage,
    CardPage
  ],
  imports: [
    IonicPageModule.forChild(RaioPage),
  ],
})



export class RaioPageModule {

 


}
