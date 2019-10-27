import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  roles: string[] = [];
  username: string;
  password: string;
  errorMessage: string;
  constructor(private authenticationService:AuthService,private router:Router) { }

  ngOnInit() {
  }

  login(e: { preventDefault: () => void; }){
    let numberConnect=Number(localStorage.getItem('numberConnexion'));
     this.authenticationService.login(this.username, this.password)
       .subscribe(
         data=> {
           if(data.code=="ko"){
            this.errorMessage=data
            console.log(data)
           }
           else{
            this.authenticationService.saveToken(data.token)
            this.router.navigateByUrl('/home')
           }
       }
       );
      // window.location.reload();
       //alert(this.errorMessage);
   }
}
