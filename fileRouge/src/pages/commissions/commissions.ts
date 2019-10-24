import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../service/data.service';

/**
 * Generated class for the CommissionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-commissions',
  templateUrl: 'commissions.html',
})
export class CommissionsPage {
  commissions:{};
  constructor(public navCtrl: NavController, public navParams: NavParams,private data: DataService) {
  }

 showCommissions(){
   this.data.getCommissions().subscribe(
     data=>{
      this.commissions=data;
     }
   )
 }

 ngOnInit(){
   this.showCommissions();
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommissionsPage');
  }

}
