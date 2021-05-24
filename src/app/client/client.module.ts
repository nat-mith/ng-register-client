import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientService } from './client.service';



@NgModule({
  declarations: [
    ClientListComponent,
    ClientEditComponent,
    ClientDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    ClientService
  ]
})
export class ClientModule { }
