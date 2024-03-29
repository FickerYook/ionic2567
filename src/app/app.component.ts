import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
// import { LoginPage } from '../pages/login/login';


const config = {
  apiKey: "AIzaSyAqXeMa92q6wo-apqTwrFZ1xxg-EHLAFvc",
  authDomain: "final2566-27ab5.firebaseapp.com",
  projectId: "final2566-27ab5",
  storageBucket: "final2566-27ab5.appspot.com",
  messagingSenderId: "255895521521",
  appId: "1:255895521521:web:81cc9c7849776552fec150"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
