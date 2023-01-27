import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { ListadoclientesComponent } from './listadoclientes/listadoclientes.component';
import { AgregarComponent } from './agregar/agregar.component';

import { ClientesService } from './services/clientes.service';



@NgModule({
  declarations: [
    MainPageComponent,
    ListadoclientesComponent,
    AgregarComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    ClientesService
  ]
})
export class ClientesModule { }
