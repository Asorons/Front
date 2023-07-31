import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import Swal from 'sweetalert2';

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

  delete(cliente: Cliente):void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Estas seguro?',
      text: `Estas seguro de que quieres eliminar al cliente: ${cliente.nombre} ${cliente.apellido}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.delete(cliente.id).subscribe(
          response =>{

            this.clientes = this.clientes.filter(cli => cli !== cliente)

            swalWithBootstrapButtons.fire(
              'Cliente Eliminado!',
              `El cliente ${cliente.nombre} ${cliente.apellido} se elimino con exito.`,
              'success'
            )
          }
        )
      } 
    })
  }
}
