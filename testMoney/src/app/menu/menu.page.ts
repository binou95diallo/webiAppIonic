import { Component, OnInit } from '@angular/core';
import { LoginPage } from '../page/login/login.page';
import { TransactionPage } from '../page/transaction/transaction.page';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from '../page/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage{
  //rootPage:any = LoginPage;
  public pages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title:'Transaction',
      url:'/transaction',
      icon:'send',
      label:'Envoie/Retrait',
      page:TransactionPage
  },
  {
      title:'List des Opérations',
      url:'/mes-operations',
      icon:'list',
  },
{
  title:'Déconnexion',
  url:'logout',
  icon:'close',
  label:'Se déconnecter'
}
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl:NavController,
    private auth:AuthService,
    private router:Router
  ) {}

  onActionMenu(p):void{
    if(p.url=="logout"){
      //this.auth.logout();
      this.router.navigateByUrl('/logout')
    }
    else{
      this.router.navigateByUrl('/home');
      //this.router.navigateByUrl(p.url);
    }
}
}
