import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {ContactsService} from '../../services/contactsService';
import swal from 'sweetalert2';

@Component({imports: [RouterLink],
  selector: 'app-contact-list',
  styleUrl: './contact-list.scss',
  templateUrl: './contact-list.html'
})

export class ContactList {
  contactsService = inject(ContactsService);


  eliminarContacto(id:string) {
 
   this.contactsService.deleteContact(id);
   swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    theme: 'dark',
    timerProgressBar: false,
    didOpen: (toast) => {
      toast.onmouseenter = swal.stopTimer;
      toast.onmouseleave = swal.resumeTimer;
    }
  }).fire({
  icon: "success",
  title: "Contacto eliminado correctamente",
});
}

}
