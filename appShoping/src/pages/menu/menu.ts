import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Category } from '../../model/interface-category';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage:any;
  categories:Category[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootPage=HomePage
    this.categories=[
      {
        title:"Vêtement",
        description:"description",
        icon:"shirt"
      },
      {
        title:"chausssure",
        description:"description",
        icon:"paw"
      },
      {
        title:"MakeUp",
        description:"description",
        icon:"brush"
      },

    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
