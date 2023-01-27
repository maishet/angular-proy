import { Injectable } from "@angular/core";
import { Cliente } from "../interfaces/clientes.interface";



@Injectable()
export class ClientesService {

    private _clientes: Cliente[] = [
        {
          nombre: 'Juan',
          edad: 35
        },
        {
          nombre: 'Pedro',
          edad: 25
        }
    ]

    get clientes(): Cliente[] {
        return [...this._clientes];
    }

    constructor() { 
    console.log('ClientesService constructor');
    }

    agregarCliente(cliente: Cliente) {
        this._clientes.push(cliente);
    }
}