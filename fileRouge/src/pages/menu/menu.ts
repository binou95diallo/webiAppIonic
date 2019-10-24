import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthService } from '../../service/auth.service';
import { LoginPage } from '../login/login';
import { TransactionPage } from '../transaction/transaction';
import { ComptePage } from '../compte/compte';
import { TabsPage } from '../tabs/tabs';
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
  pages=[
    {
      title:'Transaction',
      url:'/menu/transaction',
      icon:'send',
      label:'Envoie/Retrait',
      page:TransactionPage
  },
  {
      title:'Liste Transactions',
      url:'/menu/listTransaction',
      icon:'list',
      label:'Liste Transactions',
      page:TabsPage
  },
  {
    title:'Mon compte',
    url:'/menu/compte',
    icon:'contact',
    label:'Profil',
    page:ComptePage
},
{
  title:'Déconnexion',
  url:'logout',
  icon:'close',
  label:'Se déconnecter'
}

  ]
  rootPage:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public auth:AuthService) {
    this.rootPage=HomePage
    
  }

  onActionMenu(p):void{
      if(p.url=="logout"){
        this.auth.logout();
        this.navCtrl.push(LoginPage);
      }
      else{
        this.navCtrl.push(p.page);
        //this.router.navigateByUrl(p.url);
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
