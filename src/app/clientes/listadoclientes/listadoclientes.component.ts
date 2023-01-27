import { Component } from '@angular/core';

import { Cliente } from '../interfaces/clientes.interface';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-listadoclientes',
  templateUrl: './listadoclientes.component.html',
  styleUrls: ['./listadoclientes.component.css']
})
export class ListadoclientesComponent {
  
  // @Input('data') //decorador para que se pueda usar en el componente padre  
  // // listacliente: any[] = [];  //evitar el any
  // listacliente: Cliente[] = [];

  get listacliente(): Cliente[] {
    return this.clienteservice.clientes;
  }

  constructor(private clienteservice:ClientesService) { }
}
