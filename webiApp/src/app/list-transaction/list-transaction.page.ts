import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, NavParams } from '@ionic/angular';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.page.html',
  styleUrls: ['./list-transaction.page.scss'],
})
export class ListTransactionPage implements OnInit {

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

  ngOnInit(){
    this.getHistoOp();
  }

}
