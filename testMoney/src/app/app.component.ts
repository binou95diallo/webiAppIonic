import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { LoginPage } from './page/login/login.page';
import { TransactionPage } from './page/transaction/transaction.page';
import { AuthService } from './page/service/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  rootPage:any = LoginPage;
  public appPages = [
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
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  onActionMenu(p):void{
    if(p.url=="logout"){
      this.auth.logout();
      this.router.navigateByUrl('/login')
    }
    else{
      this.router.navigateByUrl('/home');
      //this.router.navigateByUrl(p.url);
    }
}
}
