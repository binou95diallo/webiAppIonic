import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Product } from '../../model/interface-product';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  productDetails:Product;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public event:Events) {
    this.productDetails=this.navParams.get('data');
    this.event.subscribe('star-rating:changed',(note)=>{
      console.log("Voici la note choisie: ",note);
      
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  goBack() :void {
    this.navCtrl.pop();
  }
}
