import { HttpClient,HttpHeaders } from '@angular/common/http';
/* import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw'; */
import {AuthService} from './auth.service';
import { Partenaire } from '../model/partenaire';
import { User } from '../model/users';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable()
export class DataService {

  private uri= 'http://localhost:8000/api';
  //private uriU= 'http://localhost:8000/api/user';
  private _registerUrl = "http://localhost:8000/api/register";
  

  constructor(private http: HttpClient, private authenticationService: AuthService  ) {}
  private headers = {headers:new HttpHeaders().set( 'Authorization','Bearer '+localStorage.getItem('token'))};
  getPartenaire(): Observable<any[]> {
    console.log(this.headers);
    return  this.http.get<any>(this.uri+'/partenaire/partenaires' , this.headers)
  }

  addPartenaire(partenaire,imageName) {
    const formData = new FormData();

    formData.append('imageName',imageName);
    formData.append('username',partenaire.username);
    formData.append('password',partenaire.password);
    formData.append('nomComplet',partenaire.nomComplet);
    formData.append('adresse',partenaire.adresse);
    formData.append('telephone',partenaire.telephone);
    formData.append('email',partenaire.email);
    formData.append('status',partenaire.status);
    formData.append('profil',partenaire.profil);
    formData.append('ninea',partenaire.ninea);
    formData.append('raisonSocial',partenaire.raisonSocial);
    formData.append('solde',partenaire.solde);
    const  headers = new HttpHeaders();
    console.log(this.authenticationService.token);
    console.log(partenaire);
    console.log(headers);
    return this.http.post(this.uri+'/partenaire/ajout',formData);
  }



  updatePartenaire(partenaire: Partenaire , id) {
    const  headers = new HttpHeaders();
    headers.append('content-type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
    return this.http.put(this.uri + id + '/edit' , JSON.stringify(partenaire), {headers : headers});
  }


  deletePartenaire(id: any) {
    const  headers = new HttpHeaders();
    headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
    return this.http.delete(this.uri + '/' + id, {headers : headers});
  }

  registerUser(user,imageName) {
    const formData = new FormData();

    formData.append('imageName',imageName);
    formData.append('username',user.username);
    formData.append('password',user.password);
    formData.append('nomComplet',user.nomComplet);
    formData.append('adresse',user.adresse);
    formData.append('telephone',user.telephone);
    formData.append('email',user.email);
    formData.append('status',user.status);
    formData.append('profil',user.profil);
    console.log(this.authenticationService.token);
    console.log(user);
   return this.http.post(this._registerUrl, formData);
  
  }
  public uploadImage(image: File): Observable<any> {
    const formData = new FormData();

    formData.append('imageName', image);

    return this.http.post(this.uri+'/uploadImage', formData);
  }
  depot(montant,id) {
    const formData = new FormData();
    formData.append('montant',montant);
    formData.append('id',id);
    console.log(this.authenticationService.token);
    console.log(montant);
   return this.http.post(this.uri+'/bankAccount/depot/ajout', formData);
  
  }

  addCompte(solde,idPartenaire){
    const formData=new FormData();
    formData.append("solde",solde);
    formData.append("partenaire",idPartenaire);
    return this.http.post(this.uri+'/bankAccount/ajout',formData);
  }
  getPartenaireCompte(){
    const formData=new FormData();
    formData.append('username',localStorage.getItem('currentUser'));
    return this.http.post(this.uri+'/bankAccount/partenaireCompte',formData);
  }

  passwordChange(userData) {
    console.log(userData);
    const formData = new FormData();
    formData.append('password',userData.password);
    formData.append('username',userData.username);
    console.log(formData);
   return this.http.post(this.uri+'/user/passwordReset', formData);
  
  }

  bloquerPartenaire(ninea){
    const formData=new FormData();
    formData.append('ninea',ninea);
    return this.http.post(this.uri+'/bloquer/partenaire',formData);
  }

  bloquerUser(username){
    const formData=new FormData();
    formData.append('username',username);
    return this.http.post(this.uri+'/users/bloquer',formData);
  }

  editUser(id,user){
    const formData=new FormData();
    formData.append('compteId',user.compte);
    formData.append('username',user.username);
    formData.append('password',user.password);
    formData.append('nomComplet',user.nomComplet);
    formData.append('adresse',user.adresse);
    formData.append('telephone',user.telephone);
    formData.append('email',user.email);
    formData.append('status',user.status);
    formData.append('profil',user.profil);
    return this.http.post(this.uri+'/users/'+id+'/edit',formData);
  }

  editPartenaire(partenaire){
    const formData = new FormData();
    formData.append('nomComplet',partenaire.nomComplet);
    formData.append('adresse',partenaire.adresse);
    formData.append('telephone',partenaire.telephone);
    formData.append('email',partenaire.email);
    formData.append('status',partenaire.status);
    formData.append('ninea',partenaire.ninea);
    formData.append('raisonSocial',partenaire.raisonSocial);
    formData.append('solde',partenaire.solde);
    return this.http.post(this.uri+'/partenaire/edit',formData);
  }

  showUser(id):Observable<User[]> {
    return this.http.get<User[]>(this.uri+'/users/show/'+id);
  }

  findUser(){
    const formData=new FormData();
    return this.http.post(this.uri+'/users/findUser',formData);
  }
  showPartenaire(id):Observable<Partenaire[]> {
    return this.http.get<Partenaire[]>(this.uri+'/partenaire/show/'+id);
  }
  userCompte(idCompte,userId){
    const formData=new FormData();
    formData.append("idCompte",idCompte);
    formData.append("idUser",userId);
    return this.http.post(this.uri+'/bankAccount/userCompte',formData);
  }

  getUser(): Observable<any[]> {
    //console.log(this.headers);
    return  this.http.get<any>(this.uri+'/users/PartenaireUsers')
  }

  recupBeneficiaire(code):Observable<any[]> {
   let formData=new FormData();
   formData.append('code',code);
   return this.http.post<any>(this.uri+'/recupBeneficiaire',formData,this.headers);
  }
  

  getCompte(): Observable<any[]> {
    console.log(this.headers);
    return  this.http.get<any>(this.uri+'/bankAccount' , this.headers)
  }

  getHistoOp(): Observable<any[]> {
    return  this.http.get<any>(this.uri+'/usersOp',this.headers)
  }

  getCommissions(){
    return  this.http.get(this.uri+'/commissions',this.headers)
  }
  showCommission(){
    return this.http.get(this.uri+'/showCommission',this.headers)
  }

  showDetails(transactionId): Observable<any[]> {
    let formData=new FormData();
   formData.append('id',transactionId);
    return this.http.post<any>(this.uri+'/showDetails',formData,this.headers)
  }

  filtre(dateDebut,dateFin): Observable<any[]> {
    let formData=new FormData();
    formData.append('dateDebut',dateDebut);
    formData.append('dateFin',dateFin);
    return  this.http.post<any>(this.uri+'/filtre',formData,this.headers)
  }

  listOperationsPartenaires():Observable<any[]>{
    return this.http.get<any>(this.uri+'/partenaireOp')
  }

  retraitTransact(code,beneficiaire){
    let formData=new FormData();
    formData.append('code',code);
    formData.append('typePieceR',beneficiaire.typePieceR);
    formData.append('ncniR',beneficiaire.numeroPieceR);
    return this.http.post(this.uri+'/transaction/retrait',formData,this.headers).pipe(catchError(this.handelError));;
  }

  envoiTransact(transactionData):Observable<any> {
    const formData=new FormData();
    formData.append('nomComplet',transactionData.nomComplet);
    formData.append('adresse',transactionData.adresse);
    formData.append('telephone',transactionData.telephone);
    formData.append('numeroPiece',transactionData.numeroPiece);
    formData.append('typePiece',transactionData.typePiece);
    formData.append('nomCompletR',transactionData.nomCompletR);
    formData.append('adresseR',transactionData.adresseR);
    formData.append('telephoneR',transactionData.telephoneR);
    formData.append('montant',transactionData.montant);
    formData.append('frais',transactionData.frais);
    console.log(transactionData.frais);
    return this.http.post(this.uri+'/transaction/envoie',formData,this.headers).pipe(catchError(this.handelError));
  }

  getTarifs(montant){
    console.log(montant)
    const formData=new FormData();
    formData.append("montant",montant)
    return this.http.post<any>(this.uri+'/transaction/tarif',formData,this.headers).pipe(catchError(this.handelError))
    //.map(res => res).catch(this.handelError);
  }


 downloadContrat(id):Observable<Partenaire[]> {
   const formData=new FormData();
   formData.append("id",id);
   return this.http.post<Partenaire[]>(this.uri+'/partenaire/contrat',formData);
 }

  private handelError(error: Response) {

    return Observable.throw(error || 'server error');

  }
  private handelErrorDep(error: Response) {

    return Observable.throw(error || 'server error');

  }

}