import { Component, Input } from '@angular/core';
import { Cliente } from '../interfaces/clientes.interface';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  // @Input('data') clientes: Cliente[] = [];

  constructor(private clienteservice: ClientesService) { }

  @Input('nuevo') nuevoCliente: Cliente = {
    nombre: '',
    edad: 0,
  }

  // cambiarNombre(event: any) {
  //   console.log(event.target.value);
    
  // }

  // @Output() onNuevoCliente: EventEmitter<Cliente> = new EventEmitter(); //para emitir un evento

  agregar() {
    if(this.nuevoCliente.nombre.trim().length != 0) {
      console.log(this.nuevoCliente);
      // this.clientes.push(this.nuevoCliente);
      // this.onNuevoCliente.emit(this.nuevoCliente);
      this.clienteservice.agregarCliente(this.nuevoCliente);
      this.nuevoCliente = {
        nombre: '',
        edad: 0,
      }
      // console.log(this.clientes);
      
    }
  }
}
