import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-commissions',
  templateUrl: './commissions.page.html',
  styleUrls: ['./commissions.page.scss'],
})
export class CommissionsPage implements OnInit {

  commissions:{};
  listTransactions:{};
  constructor(private data: DataService) {
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
   
 }

 ngOnInit(){
   this.showCommissions();
   this.showCommission();
 }

}
