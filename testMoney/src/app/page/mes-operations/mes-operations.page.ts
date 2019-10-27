import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { SegmentChangeEventDetail } from '@ionic/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-mes-operations',
  templateUrl: './mes-operations.page.html',
  styleUrls: ['./mes-operations.page.scss'],
})
export class MesOperationsPage implements OnInit {
  myDate:Date;
  filtres:FormGroup;
  dateDebut;
  dateFin;
  now=new Date().toISOString();
  listTransactions:{}=null;
  listTransaction:{};
  errorMessage: string;
  choice:string=null;
  commissions:{};
  details:{};
  detailShow:string=null;
  id:number;
  constructor(private data: DataService,private formBuilder: FormBuilder,private authenticationService:AuthService) {
    this.filtres=this.formBuilder.group({
      dateDebut : ['',Validators.required],
      dateFin: ['',Validators.required]
    });
  }

  getHistoOp() {
    this.data.getHistoOp().subscribe(
     data => {
       this.listTransactions = data;
       //console.log(data[0]);
       if(data[0]!=0){
        this.choice="operations"
        console.log(data.length);
        
      }
       
    }, error => this.errorMessage = error,
    );
    
  }

  showCommissions(){
    this.data.getCommissions().subscribe(
      data=>{
       this.commissions=data;
      }
    )
  }
 
  showCommission(){
    this.data.showCommission().subscribe(
      data=>{
       this.listTransactions=data
      }
     )
  }
 
  showDetails(transaction){
    this.detailShow="oui"
    this.id=parseInt(transaction.id)
    console.log(transaction);
    
    this.data.showDetails(this.id).subscribe(
      data=>{
        this.details=data
        console.log(data);       
      }
    )
    
  }
 
  ngOnInit(){
    this.dateDebut=this.now;
    this.dateFin=this.now;
    this.showCommissions();
    this.showCommission();
    this.getHistoOp();
    //this.choice="operations";
  }

  show(event:CustomEvent<SegmentChangeEventDetail>){

    console.log(event.detail.value);

    if(event.detail.value=="operations"){
      this.choice="operations"
    }
    else if(event.detail.value=="commission"){
      this.choice="commission";
      this.detailShow=null;
    }
    
  }

  filtre(){
    this.data.filtre(this.dateDebut,this.dateFin).subscribe(
      data=>{

        this.listTransactions=data;
        if(data[0]!=0){
          this.choice="operations"
          console.log(data.length);
        }
        console.log(this.listTransactions);
        
        
      }
    );
  }

  isUserPart(){
    return this.authenticationService.isUserPart();
  }
  
  isCaissier(){
    return this.authenticationService.isCaissier();
  }
  
  isPartenaire(){
    return this.authenticationService.isAdminPartenaire();
  }
  isPartenaireOrUser(){
    
    return this.authenticationService.isPartenaireOrUser();
  }
}
