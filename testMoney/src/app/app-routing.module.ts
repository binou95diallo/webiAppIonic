import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'login',
    loadChildren: () => import('./page/login/login.module').then(m => m.LoginPageModule)
  },
  { path: 'transaction',
    loadChildren: () => import('./page/transaction/transaction.module').then(m => m.TransactionPageModule),
    canActivate:[AuthGuard]
  },
  { path: 'tabs',
  loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  canActivate:[AuthGuard]
  },
  { path: 'mes-operations', 
    loadChildren: () => import('./page/mes-operations/mes-operations.module').then(m => m.MesOperationsPageModule),
   canActivate:[AuthGuard]},
  { path: 'logout', 
    loadChildren: './logout/logout.module#LogoutPageModule',
    canActivate:[AuthGuard]
   },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
