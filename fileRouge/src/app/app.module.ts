import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { AuthService } from '../service/auth.service';
import { HttpModule } from '@angular/http';
import { TokenStorageService } from '../service/token-storage.service';
import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';
import { ComptePage } from '../pages/compte/compte';
import { TransactionPage } from '../pages/transaction/transaction';
import { DataService } from '../service/data.service';
import { HttpClientModule } from '@angular/common/http';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    LoginPage,
    MainPage,
    TransactionPage,
    ComptePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    LoginPage,
    MainPage,
    ComptePage,
    TransactionPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    TokenStorageService,
    DataService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
