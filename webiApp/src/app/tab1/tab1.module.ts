import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    children:[
      { path: 'commission1', loadChildren: './tab1/commission1/commission1.module#Commission1PageModule' },
      { path: 'listTransaction1', loadChildren: './tab1/list-transaction1/list-transaction1.module#ListTransaction1PageModule' },
      
    ]

  },
  { path:'', redirectTo:'listTransaction1',pathMatch:'full'}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
