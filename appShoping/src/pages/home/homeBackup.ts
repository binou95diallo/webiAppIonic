import { Component } from '@angular/core';
import { NavController, AlertController, AlertOptions, ActionSheetOptions, ActionSheetController } from 'ionic-angular';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Articles:any[];
  constructor(public navCtrl: NavController, public alertCtrl:AlertController, public actionCtrl:ActionSheetController) {
    this.Articles=[
      {nom:'télévision',prix:150,details:"lorem ipsum de télévision  Lorem ipsum, dolor sit amet consectetur adipisicing elit"},
      {nom:'téléphone',prix:150,details:"lorem ipsum de telephone  Lorem ipsum, dolor sit amet consectetur adipisicing elit"},
    ]
  }
  showDetails(data:any) :void {
    this.navCtrl.push(DetailsPage, {data:data});
  }
  showData(data:any):void {
console.log('data is ',data);

  }

  showBasicAlert():void {
    alert('je suis une alert classique')
  }

  showIonicALert():void{
   let options:AlertOptions={
     title:"i am the title",
     subTitle:"i am the subtitle",
     message:"I am the message",
     enableBackdropDismiss:false,
     buttons:[
       {
         text:'annuler',
         role:'cancel'
       },
       {
        text:'button2',
        handler:()=>{
          console.log("click success");
          }
        }
     ]
   };
   this.alertCtrl.create(options).present();
  }


  showAction(): void{
    let options: ActionSheetOptions={
      title:'this is the title',
      subTitle:'this is the subtitle',
      enableBackdropDismiss:true,
      buttons:[
        {
          text:'Annuler',
          role:'cancel'
        },
        {
          text:'Action1',
          handler:()=>{
            console.log("Action1 click");   
          }
        },
        {
          text:'Action2',
          handler:()=>{
            console.log("Action2 click");           
          }
        }
      ]
    };
    this.actionCtrl.create(options).present();
  }

}
