import { Component } from '@angular/core';
import { Cliente } from '../interfaces/clientes.interface';

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

  clientes: Cliente[] = [
    {
      nombre: 'Juan',
      edad: 35
    },
    {
      nombre: 'Pedro',
      edad: 25
    }
  ]

  nuevoCliente: Cliente = {
    nombre: '',
    edad: 0,
  }

  // cambiarNombre(event: any) {
  //   console.log(event.target.value);
    
  // }

  agregar() {
    if(this.nuevoCliente.nombre.trim().length != 0) {
      console.log(this.nuevoCliente);
      this.clientes.push(this.nuevoCliente);
      this.nuevoCliente = {
        nombre: '',
        edad: 0,
      }
    }
  }
}
