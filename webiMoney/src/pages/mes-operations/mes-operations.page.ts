import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { SegmentChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-mes-operations',
  templateUrl: './mes-operations.page.html',
  styleUrls: ['./mes-operations.page.scss'],
})
export class MesOperationsPage implements OnInit {

  filtres:FormGroup;
  dateDebut:Date;
  dateFin:Date;
  listTransactions:{};
  listTransaction:{};
  errorMessage: string;
  choice:string;
  commissions:{};
  details:{};
  detailShow:string=null;
  id:number;
  constructor(private data: DataService,private formBuilder: FormBuilder) {
    this.filtres=this.formBuilder.group({
      dateDebut : ['',Validators.required],
      dateFin: ['',Validators.required] 

    });
  }

  getHistoOp() {
    this.data.getHistoOp().subscribe(
     data => {
       this.listTransaction = data;
       
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
    //console.log(transaction);
    this.detailShow="oui"
    this.id=parseInt(transaction.id)
    this.data.showDetails(this.id).subscribe(
      data=>{
        this.details=data
        console.log(data);
        
      }
    )
    
  }
 
  ngOnInit(){
    this.showCommissions();
    this.showCommission();
    this.getHistoOp();
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

  filtre(e: { preventDefault: () => void; }){
    this.data.filtre(this.dateDebut,this.dateFin).subscribe(
      data=>{
        this.listTransactions=data;
        
      }
    );
  }

}
