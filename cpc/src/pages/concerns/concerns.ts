import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-concerns',
  templateUrl: 'concerns.html'
})
export class ConcernsPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  popUp() {
    let alert = this.alertCtrl.create({
      title: 'Thank you for your input!',
      subTitle: 'Your feedback is important to us!',
      buttons: ['Close']
    });
    alert.present();
    return; 

  }

}
