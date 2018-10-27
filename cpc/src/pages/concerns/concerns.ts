import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-concerns',
  templateUrl: 'concerns.html'
})

export class ConcernsPage {

  public comment: String;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  popUp(input: String) {
    // create alert
    let alert = this.alertCtrl.create({
      title: 'Thank you for your input!',
      subTitle: 'Your feedback is important to us!',
      buttons: ['Close']
    });

    // have alert pop up
    alert.present();
    let test = input;
    console.log (test); 

    // store complaint in database
    // submit(comment: String) {
    //   firebase.database().ref("Comments/Categories" + Date.now()).set({"comment": this.comment});
    //   console.log(comments); 
  }

}
