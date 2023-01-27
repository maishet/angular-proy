import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClientesModule } from './clientes/clientes.module';

import { AppComponent } from './app.component';

import { ClientesService } from './clientes/services/clientes.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClientesModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
