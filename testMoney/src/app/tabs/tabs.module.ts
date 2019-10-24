import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'liste1',
        children: [
          { path: '', 
            loadChildren: () => import('./list-transaction/list-transaction.module').then(m => m.ListTransactionPageModule) 
          }
        ]
      },
      {
        path: 'commissions',
        children: [
          { path: '',
            loadChildren: () => import('./commissions/commissions.module').then(m => m.CommissionsPageModule) 
          },
          
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/liste1',
        pathMatch: 'full'
      }
  ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TabsPageModule {}
