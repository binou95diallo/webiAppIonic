import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../service/data.service';
import { Validators, FormGroup ,FormBuilder} from '@angular/forms';

/**
 * Generated class for the ListTransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-transactions',
  templateUrl: 'list-transactions.html',
})
export class ListTransactionsPage {
  errorMessage: string;
  statut:string;
  listTransactions:{};
  filtres:FormGroup;
  dateDebut:Date;
  dateFin:Date;
  constructor(public navCtrl: NavController, public navParams: NavParams,private data: DataService,private formBuilder: FormBuilder) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListTransactionsPage');
  }

}
