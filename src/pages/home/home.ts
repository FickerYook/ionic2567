import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { student } from '../../model/std_data';
import { StudentServiceProvider } from '../../providers/student-service/student-service';
import {Subscription} from 'rxjs/Subscription'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  student:student[];
  sub:Subscription
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private studentService:StudentServiceProvider
              ) {}

        private getStudent(){
          this.sub = this.studentService.getStudent().subscribe(
          (students:student[])=> 
            this.student = students
          )
        }

  ionViewDidLoad() {
    this.getStudent();
  }
}
