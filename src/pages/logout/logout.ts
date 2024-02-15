

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html'
})
export class LogoutPage {

  constructor(private navCtrl: NavController) {
    
  }
  
  logout(){
    this.navCtrl.setRoot(LoginPage);
  }

}
