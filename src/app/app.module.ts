import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { ColetaSalvarPageModule } from './coleta-lixo/salvar/salvar.module';
import { CategoriaSalvarPageModule } from './categoria-lixo/salvar/salvar.module';
import { SalvarPageModule } from './asfalto-novo/salvar/salvar.module';
import { CrecheSalvarPageModule } from './creche/salvar/salvar.module';

import { Camera } from '@ionic-native/camera/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    SalvarPageModule,
    CategoriaSalvarPageModule,
    ColetaSalvarPageModule,
    CrecheSalvarPageModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAJ9wwQrJh7AQiISADA2BBzERtmgjNPEvU",
      authDomain: "cityhall-8470c.firebaseapp.com",
      databaseURL: "https://cityhall-8470c.firebaseio.com",
      projectId: "cityhall-8470c",
      storageBucket: "cityhall-8470c.appspot.com",
      messagingSenderId: "365229937896",
      appId: "1:365229937896:web:3779707883631f89"
    }),
    AngularFireDatabaseModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
