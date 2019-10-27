
import { Injectable, OnInit } from '@angular/core';
//import {Headers, Response, URLSearchParams} from '@angular/http';
//import { Observable } from 'rxjs/Observable';
/* import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'; */
import { JwtHelperService } from "@auth0/angular-jwt";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthService{
 
  public token: string;
   numberConnexion=null;
  message:any;
  compteur=0;

  roles: Array<string>;
  private _registerUrl = "http://localhost:8000/api/register";
  constructor(private http: HttpClient) {
  }
  public getToken(): string {
    let token=localStorage.getItem('token');
    const JWThelper = new JwtHelperService();
    const objJWT = JWThelper.decodeToken(localStorage.getItem('token'));
    this.roles=objJWT.roles;
    //this.parseJWT();
    return token;
  }

  public saveToken(jwt: string){
    let token=localStorage.setItem('token',jwt);
  }
ngOnInit(){
 
}

  login(username: string, password: string):Observable<any>{
    //let headers = new Headers();
    let nbConnex;
    //headers.append('content-type', 'application/x-www-form-urlencoded');

    return this.http.post('http://127.0.0.1:8000/api/login', {'username':username,'password':password}).pipe(catchError(this.handelError));;
  }
  parseJWT(){
    const JWThelper = new JwtHelperService();
    const objJWT = JWThelper.decodeToken(this.getToken());
    this.roles=objJWT.roles;
    console.log(objJWT);
  }
  isAdmin(){
    return this.roles && this.roles.indexOf("ROLE_ADMIN")>=0;
  }

  isUser(){
    return this.roles && this.roles.indexOf("ROLE_USER")>=0;
  }
  isUserPart(){
    return this.roles && this.roles.indexOf("ROLE_USERPART")>=0;
  }
  isCaissier(){
    return this.roles && this.roles.indexOf("ROLE_CAISSIER")>=0;
  }
  isAdminPartenaire(){
    return this.roles && this.roles.indexOf("ROLE_ADMINPARTENAIRE")>=0;
  }

  isPartenaireOrUser(){
    return this.roles && (this.roles.indexOf("ROLE_USERPART")>=0 || this.roles.indexOf("ROLE_ADMINPARTENAIRE")>=0);
  }

  isAdminPartenaireOrCaissier(){
    return this.roles && (this.roles.indexOf("ROLE_ADMINPARTENAIRE")>=0 || this.roles.indexOf("ROLE_CAISSIER")>=0);
  }

  isAuthenticated(){
    return this.roles && (this.isUser());
  }
  isSuperAdmin(){
    return this.roles && this.roles.indexOf("ROLE_SUPER_ADMIN")>=0;
  }
  isSuperAdminOrPartenaire(){
    return this.roles && this.roles.indexOf("ROLE_SUPER_ADMIN")>=0|| this.roles.indexOf("ROLE_ADMINPARTENAIRE")>=0;
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
  }

  private handelError(error: Response) {

    return Observable.throw(error || 'server error');

  }

}