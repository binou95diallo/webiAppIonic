import { NgModule } from '@angular/core';
import { IonicPageModule} from 'ionic-angular';
import { MenuPage } from './menu';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes=[
  {
    path:'',
    redirectTo:'/menu/main',
    pathMatch:'full'
  },
  {
    path:'',
    component: MenuPage,
    children:[
      {
        path:'main',loadChildren:'./pages/main/main.module#MainPageModule'
      },
      {
        path:'transaction',loadChildren:'./pages/transaction/transaction.module#TransactionPageModule'
      }
    ]
  }
]

@NgModule({
  declarations: [
    MenuPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuPage),
    RouterModule.forChild(routes),
    
  ],
})
export class MenuPageModule {}
