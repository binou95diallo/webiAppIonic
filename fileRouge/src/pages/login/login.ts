import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../service/auth.service';
import { TokenStorageService } from '../../service/token-storage.service';
import { MenuPage } from '../menu/menu';
import { HomePage } from '../home/homeBackup';
import { TransactionPage } from '../transaction/transaction';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private authenticationService: AuthService,private tokenStorage:TokenStorageService) {
  }
  roles: string[] = [];
  username: string;
  password: string;
  errorMessage: string;
 /*  constructor(
    public navCtrl: NavController, 
    public alertCtrl:AlertController, 
    public actionCtrl:ActionSheetController) {
    
  } */

ngOnInit() {
if (this.tokenStorage.getToken()) {
this.roles = this.tokenStorage.getAuthorities();
}
}

  /* showDetails(Article:Product): void{
    this.navCtrl.push(DetailsPage, {data:Article});
  } */

  login(e: { preventDefault: () => void; }) {
    let numberConnect=Number(localStorage.getItem('numberConnexion'));
     this.authenticationService.login(this.username, this.password)
       .subscribe(data=> {
       alert(data)
       this.errorMessage=data
      
     if(numberConnect<1 && !this.errorMessage){
         
          //this.router.navigateByUrl('/passwordChange');
          this.navCtrl.push(HomePage)
        }
        else if(numberConnect>=1 && !this.errorMessage){
          //this.errorMessage=data
          //this.router.navigateByUrl('/home');
          this.navCtrl.push(TransactionPage)
        }
       }, err => err
       
       );
       //alert(this.errorMessage);
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
