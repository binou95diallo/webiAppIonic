import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../../service/data.service';

/**
 * Generated class for the TransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction',
  templateUrl: 'transaction.html',
})
@Injectable()
export class TransactionPage {

  private expediteur:FormGroup;
  private recepteur:FormGroup;
  transaction:{};
  reussie:String=null;
  type:String=null;
  errorMessage: {};
  beneficiaire:{};
  errorMessageR:{};
  verif:String=null;


  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder,private data:DataService) {
    this.expediteur=this.formBuilder.group({
      adresse : ['',Validators.required],
      telephone: ['',Validators.required],
      nomComplet: ['',Validators.required], 
      numeroPiece: ['',Validators.required], 
      typePiece: ['',Validators.required]

    });
    this.recepteur=this.formBuilder.group({
      adresse : ['',Validators.required],
      telephone: ['',Validators.required],
      nomComplet: ['',Validators.required], 
      numeroPiece: ['',Validators.required], 
      typePiece: ['',Validators.required], 

    });
  }


  envoiTransact(){
    this.data.envoiTransact(this.expediteur,this.recepteur).subscribe(
      data=>{
        this.errorMessage=data.message
        this.expediteur=data
        this.recepteur=data
        this.transaction=data
        console.log(data)
        this.reussie="oui"
    })

  }

  imprimerRecu(){
    window.print()
  }

  envoie():void{
    this.type="envoie"
    console.log("this.reussie");
    
  }
  retrait():void{
    this.type="retrait"
  }
  
  recupBeneficiaire(codeEnter){
    this.data.recupBeneficiaire(codeEnter).subscribe(
      data=>{
        this.beneficiaire=data;
        console.log(data);
        this.verif="oui";
        return this.beneficiaire;
    },err=>this.errorMessage=err.error.message);
  }

  isVerif(){
    return this.beneficiaire;
  }

  retraitTransact(codeEnter,recep){
    this.data.retraitTransact(codeEnter,recep).subscribe(data=>{
      console.log(data);
      this.transaction=data
      this.errorMessageR=data.message
      this.reussie="oui"
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionPage');
  }

}
