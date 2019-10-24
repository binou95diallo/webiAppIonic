import { Component } from '@angular/core';
import { NavController, AlertController, AlertOptions, ActionSheetOptions, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public navCtrl: NavController, 
    public alertCtrl:AlertController, 
    public actionCtrl:ActionSheetController) {
    
  }

}
