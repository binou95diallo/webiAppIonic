import { NgModule } from '@angular/core';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  { path: 'logout',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  { path: 'transaction',
    loadChildren: () => import('./transaction/transaction.module').then(m => m.TransactionPageModule)
  },
  { path: 'tabs',
  loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' 
  
},
  { path: 'mes-operations', loadChildren: './mes-operations/mes-operations.module#MesOperationsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
