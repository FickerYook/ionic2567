import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http'; 

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { LogoutPage } from '../pages/logout/logout';
import { StudentServiceProvider } from '../providers/student-service/student-service';
import { AngularFireModule } from 'angularfire2'    // import AngularFireModel from install npm
import { AngularFireAuthModule } from 'angularfire2/auth'
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AddRoomPage } from '../pages/add-room/add-room';
import { RoomPage } from '../pages/room/room';

import { TestPage } from '../pages/test/test';




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddRoomPage,
    RoomPage,
    TestPage,

    
    
  
    LoginPage,
    RegisterPage,
    LogoutPage,
    TabsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG), //import angular module
    AngularFireAuthModule,
    HttpClientModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    LogoutPage,
    RoomPage,
    AddRoomPage,
    TestPage,
    TabsPage,

    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StudentServiceProvider
  ]
})
export class AppModule {}
