import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent {
  clientes: Cliente[];

  constructor(private clienteService: ClienteService){}

  ngOnInit(){
    this.clienteService.getClientes().subscribe(
      
      clientes => this.clientes = clientes
      //cuando se tiene mas de un parametro se ponen parentesis al inicio
      //function (clientes) {
      //  this.clientes = clientes
      //}
    );
    //this.clientes: es la variable de clientes del componente mientras que la
    //variable de CLIENTES es una variable constante del JSON
    //esto hace que variable actual tome los valores de la variable del json
  }
}
