import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { AuthGuard } from '../services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      { path: 'home', loadChildren: './home/home.module#HomeModule',
      canActivate:[AuthGuard]
     },
      { path: 'logout', 
      loadChildren: './logout/logout.module#LogoutPageModule',
      canActivate:[AuthGuard]
   },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule',
    canActivate:[AuthGuard] 
    },
    { path: 'transaction', 
      loadChildren: './transaction/transaction.module#transactionPageModule',
      canActivate:[AuthGuard]
    },
    { path: 'mes-operations', loadChildren: './mes-operations/mes-operations.module#mesOperationsModule',
      canActivate:[AuthGuard]
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
  declarations: [MenuPage]
})
export class MenuPageModule {}
