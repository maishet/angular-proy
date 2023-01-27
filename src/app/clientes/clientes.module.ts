import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { ListadoclientesComponent } from './listadoclientes/listadoclientes.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListadoclientesComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ClientesModule { }
