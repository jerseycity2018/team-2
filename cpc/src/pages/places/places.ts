import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { place } from '../../models/place'; 
import firebase from 'firebase';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'; 

@Component({
  selector: 'page-places',
  templateUrl: 'places.html'
})
export class PlacesPage {

  public places: Array<place> = [];


  constructor(public navCtrl: NavController) {

    // create an array full of places to see in park
    let consGarden = new place ("Conservatory Garden", "A nice place to relax and enjoy the nature", "../../assets/imgs/conservatory_garden.jpg");
    this.places.push (consGarden); 

    let consPond = new place ("Conservatory Pond", "A beautiful pond full of fish and other life.", "../../assets/imgs/conservatory_pond.jpg");
    this.places.push(consPond);

    let strawGarden = new place ("Strawberry Garden", "Paying tribute to John Lennon. Come explore this lovely section of the park. Located 71st and 74th Streets along Central Park West.", "../../assets/imgs/strawberry_fields.jpg");
    this.places.push(strawGarden); 

    let bowBridge = new place("Bow Bridge", "One of the most photographed placed in the park. Completed in 1862.", "../../assets/imgs/bow_bridge.jpg")
    this.places.push(bowBridge);

    let belCast = new place ("Belvedere Castle", "Originally designed in 1866 by Jacob Wrey Mould. closed for restoration till Friday, May 31, 2019.", "../../assets/imgs/bel_cast.jpg");
    this.places.push(belCast);


  }

   visitedPlace(location: place) {
    let visited = location; 
    firebase.database().ref("Locations/" + Date.now()).set({"location": location});
    console.log(visited); 
    
  }

}
