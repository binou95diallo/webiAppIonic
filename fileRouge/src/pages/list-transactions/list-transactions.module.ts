import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListTransactionsPage } from './list-transactions';

@NgModule({
  declarations: [
    ListTransactionsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListTransactionsPage),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ListTransactionsPageModule {}
