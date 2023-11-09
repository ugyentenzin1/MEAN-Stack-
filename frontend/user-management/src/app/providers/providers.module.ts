import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddProvidersComponent} from "./add-providers/add-providers.component";
import {DeleteProvidersComponent} from "./delete-providers/delete-providers.component";
import {EditProvidersComponent} from "./edit-providers/edit-providers.component";
import {ProvidersComponent} from "./providers.component";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [AddProvidersComponent, DeleteProvidersComponent, EditProvidersComponent, ProvidersComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports : [AddProvidersComponent, DeleteProvidersComponent, EditProvidersComponent]
})
export class ProvidersModule { }
