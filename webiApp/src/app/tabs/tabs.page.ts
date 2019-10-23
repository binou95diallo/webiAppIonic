import { Component, OnInit } from '@angular/core';
import { ListTransactionPage } from '../list-transaction/list-transaction.page';
import { CommissionsPage } from '../commissions/commissions.page';
import { DataService } from '../service/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage{

 /*  listTransactionsRoot = ListTransactionPage
  commissionsRoot = CommissionsPage */
  transaction:string=null
  commission:string=null
  commissions:{};
  errorMessage: string;
  statut:string;
  listTransactions:{};
  filtres:FormGroup;
  dateDebut:Date;
  dateFin:Date;
  constructor(private data: DataService,private formBuilder: FormBuilder) {
    this.filtres=this.formBuilder.group({
      dateDebut : ['',Validators.required],
      dateFin: ['',Validators.required] 

    });
   }

   getHistoOp() {
    this.data.getHistoOp().subscribe(
     data => {
       this.listTransactions = data;
       
    }, error => this.errorMessage = error,
    );
    
  }

  filtre(e: { preventDefault: () => void; }){
    this.data.filtre(this.dateDebut,this.dateFin).subscribe(
      data=>{
        this.listTransactions=data;
        
      }
    );
  }

  showCommissions(){
    this.data.getCommissions().subscribe(
      data=>{
       this.commissions=data;
      }
    )
  }
 
  ngOnInit(){
    this.showCommissions();
    this.getHistoOp();
  }

  showTransactions(){
    this.transaction="ok"
    this.commission=null
  }
  showComm(){
    this.commission="ok"
    this.transaction=null
  }
}
