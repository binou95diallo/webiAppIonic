
import { CommissionsPage } from './commissions';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

@NgModule({
  declarations: [
    CommissionsPage,
  ],
  imports: [
   // IonicPageModule.forChild(CommissionsPage),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CommissionsPageModule {}
