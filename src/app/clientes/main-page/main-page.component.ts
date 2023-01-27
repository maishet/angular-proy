import { Component } from '@angular/core';
import { Cliente } from '../interfaces/clientes.interface';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  // agregar(event:any) {
  //   event.preventDefault(); //prevee que se recargue la pagina, por el submit
  //   console.log("hey");
  // }

  // clientes: Cliente[] = [
  //   {
  //     nombre: 'Juan',
  //     edad: 35
  //   },
  //   {
  //     nombre: 'Pedro',
  //     edad: 25
  //   }
  // ]
  get clientes(): Cliente[] {
    return this.clienteservice.clientes;
  }

  constructor(private clienteservice:ClientesService ) { 

    //realmente al main page no le sirve tener las funciones de agregar o la lista de clientes
    //por eso se crea un servicio para que se encargue de eso
    
  }
}
