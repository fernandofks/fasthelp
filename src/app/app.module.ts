import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RaioPage } from '../pages/raio/raio';
import { CardPage } from '../pages/card/card';
import { FormularioPage } from '../pages/formulario/formulario';
import { PreencherPage } from '../pages/preencher/preencher';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmacaoPage } from '../pages/confirmacao/confirmacao';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RaioPage,
    CardPage,
    FormularioPage,
    PreencherPage,
    ConfirmacaoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RaioPage,
    CardPage,
    FormularioPage,
    PreencherPage,
    ConfirmacaoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}
