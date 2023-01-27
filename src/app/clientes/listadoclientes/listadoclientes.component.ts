import { Component, Input } from '@angular/core';

import { Cliente } from '../interfaces/clientes.interface';

@Component({
  selector: 'app-listadoclientes',
  templateUrl: './listadoclientes.component.html',
  styleUrls: ['./listadoclientes.component.css']
})
export class ListadoclientesComponent {
  
  @Input('data') //decorador para que se pueda usar en el componente padre  
  // listacliente: any[] = [];  //evitar el any
  listacliente: Cliente[] = [];
}
