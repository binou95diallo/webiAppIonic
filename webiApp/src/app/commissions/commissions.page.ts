import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-commissions',
  templateUrl: './commissions.page.html',
  styleUrls: ['./commissions.page.scss'],
})
export class CommissionsPage implements OnInit {

  commissions:{};
  constructor(private data: DataService) {
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
 }

}
