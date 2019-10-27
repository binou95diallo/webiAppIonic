import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {
  private expediteur:FormGroup;
  private recepteur:FormGroup;
  transaction:{};
  reussie:String=null;
  type:String=null;
  //errorMessage:any;
  beneficiaire:{};
  error:{}=null;
  verif:String=null;
  frais:{};
  errorMessages:string;
  transactionData=new FormGroup({
    adresse :new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.required]),
    nomComplet: new FormControl('', [Validators.required]), 
    numeroPiece: new FormControl('', [Validators.required]),
    typePiece: new FormControl('', [Validators.required]),
    adresseR :new FormControl('', [Validators.required]),
    telephoneR: new FormControl('', [Validators.required]),
    nomCompletR: new FormControl('', [Validators.required]), 
    montant:new FormControl('',[Validators.required]),
      frais:new FormControl('')
    });
  errorMessage={
    'numeroPiece':[
     {type:'required', message:'numero piece obligatoire '},
     {type:'minlength', message:'veuillez saisir au minimum 5 lettres'},
     {type:'pattern', message:'Ecrivez correctement le numero de piece'}
    ],
    'telephone':[
     {type:'required', message:'telephone obligatoire '},
     {type:'minlength', message:'veuillez saisir au minimum 9 lettres'},
     {type:'maxlength', message:'veuillez saisir au maximum 9 lettres'},
     {type:'pattern', message:'Ecrivez correctement le numero de telephone'}

    ],
    'nomComplet':[
     {type:'required', message:'Champ prenom obligatoire '},
     {type:'minlength', message:'veuillez saisir au minimum 2 lettres'},
     {type:'pattern', message:'Ecrivez correctement le nom'}

    ],
    'montant':[
      {type:'required', message:'montant obligatoire'},
    ],
    'adresse':[
      { type:'required', message:'adresse obligatoire'}
    ],
    'telephoneR':[
      {type:'required', message:'telephone obligatoire '},
      {type:'minlength', message:'veuillez saisir au minimum 9 lettres'},
      {type:'maxlength', message:'veuillez saisir au maximum 9 lettres'},
      {type:'pattern', message:'Ecrivez correctement le numero de telephone'}
 
     ],
     'nomCompletR':[
      {type:'required', message:'nomComplet obligatoire '},
      {type:'minlength', message:'veuillez saisir au minimum 2 lettres'},
      {type:'pattern', message:'Ecrivez correctement le nom'}
 
     ],
     'adresseR':[
       { type:'required', message:'adresse obligatoire'}
     ]
  }

  constructor(private formBuilder: FormBuilder,private data:DataService) {
    this.expediteur=this.formBuilder.group({
      adresse : ['',Validators.required],
      telephone: ['',Validators.required],
      nomComplet: ['',Validators.required], 
      numeroPiece: ['',Validators.required], 
      typePiece: ['',Validators.required],
      adresseR : ['',Validators.required],
      telephoneR: ['',Validators.required],
      nomCompletR: ['',Validators.required], 
      numeroPieceR: ['',Validators.required], 
      typePieceR: ['',Validators.required],
      montant:['',Validators.required],
      frais:['',Validators.required] 

    });
    this.recepteur=this.formBuilder.group({
      adresse : ['',Validators.required],
      telephone: ['',Validators.required],
      nomComplet: ['',Validators.required], 
      numeroPiece: ['',Validators.required], 
      typePiece: ['',Validators.required],
      montant:['',Validators.required],
      frais:['',Validators.required] 

    });
  }


  envoiTransact(transactionData:any){
    console.log(this.transactionData);
    this.data.envoiTransact(transactionData).subscribe(      
      data=>{
        if(data.status!=400){
          this.transaction=data
          this.reussie="oui"
        }
        else if(data.status==400){
          this.reussie="echec"
          this.error=data
        }
        console.log(data.message)
    }/* ,
    err => {this.error=err
      console.log(err.message)
    } */
    )
  }
  infotarif(montant){
    console.log(montant);
    this.data.getTarifs(montant)
   .subscribe(
     res => {
       this.frais=res;
       console.log(this.frais)
      },
  
     err => console.log(err)
   )
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
      //this.errorMessageR=data.message
      this.reussie="oui"
    });
  }
  
  ngOnInit() {
  }

}
