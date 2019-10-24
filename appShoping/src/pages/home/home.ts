import { Component } from '@angular/core';
import { NavController, AlertController, AlertOptions, ActionSheetOptions, ActionSheetController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { Product } from '../../model/interface-product';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Articles:Product[];
  constructor(
    public navCtrl: NavController, 
    public alertCtrl:AlertController, 
    public actionCtrl:ActionSheetController) {
    this.Articles=[
      {
        title:'jacket',
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore alias officiis doloribus sit, maiores excepturi temporibus, dolore asperiores hic illum quidem nulla, quibusdam ipsam modi enim similique quis voluptatum pariatur.",
        price:45,
        category:"vêtement",
        createdAt:new Date(),
        state:'Neuf',
        city:'Londres',
        id:'1',
        averageStar:4,
        availability:{
          available:true,
          type:'Livraison',
          feed:10
        },
        pictures:[
          'assets/imgs/product1/jacket.jpeg',
          'assets/imgs/product1/beigeJacket.jpeg',
          'assets/imgs/product1/jacket.jpeg',
          'assets/imgs/product1/beigeJacket.jpeg'
        ]
      },
      {
        title:'MakeUp',
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore alias officiis doloribus sit, maiores excepturi temporibus, dolore asperiores hic illum quidem nulla, quibusdam ipsam modi enim similique quis voluptatum pariatur.",
        price:35,
        category:"makeUp",
        createdAt:new Date(),
        state:'Neuf',
        city:'Londres',
        id:'2',
        averageStar:4,
        availability:{
          available:true,
          type:'Disponible en magasin',
          feed:10
        },
        pictures:[
          'assets/imgs/product2/makeup.jpeg',
          'assets/imgs/product2/makeup.jpeg',
          'assets/imgs/product2/makeup.jpeg',
          'assets/imgs/product2/makeup.jpeg'
        ]
      },
      {
        title:'Chaussure',
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore alias officiis doloribus sit, maiores excepturi temporibus, dolore asperiores hic illum quidem nulla, quibusdam ipsam modi enim similique quis voluptatum pariatur.",
        price:50,
        category:"chaussure",
        createdAt:new Date(),
        state:'Neuf',
        city:'Londres',
        id:'2',
        averageStar:5,
        availability:{
          available:true,
          type:'Disponible en magasin',
          feed:10
        },
        pictures:[
          'assets/imgs/product3/talon.jpeg',
          'assets/imgs/product3/louboutin.jpeg',
          'assets/imgs/product3/talonHaute.jpeg',
          'assets/imgs/product3/shoes.jpeg'
        ]
      }
    ]
  }

  showDetails(Article:Product): void{
    this.navCtrl.push(DetailsPage, {data:Article});
  }

}
