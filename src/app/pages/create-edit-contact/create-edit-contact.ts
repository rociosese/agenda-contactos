import { Component, effect, inject, signal } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { form, FormField } from '@angular/forms/signals';
import { ContactsService } from '../../services/contactsService';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  imports: [FormField],
  selector: 'app-create-edit-contact',
  styleUrl: './create-edit-contact.scss',
  templateUrl: './create-edit-contact.html',
})
export class CreateEditContact {

  contactsService = inject(ContactsService);
  router = inject(Router);

  newContactModel = signal<Contact>({
    id: '',
    nombre: '',
    apellido: '',
    numeroTelefono: ''
  });

  // mostrarForm = effect(() => console.log(this.newContactModel()));

  formCreateContact = form(this.newContactModel);

  onSubmit(event: Event) {
    event.preventDefault();
    const idContactoCreado = this.contactsService.agregarContacto(this.newContactModel());

    Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      theme: 'dark',
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    }).fire({
      icon: 'success',
      title: 'Contacto creado correctamente'
    });

    this.router.navigate(['/contacts', idContactoCreado]);
    // Perform login logic here;
    //const credentials = this.loginModel();
    //console.log('Logging: in with:', credentials);
    //e.g., await this.authService.login(credentials);
  }

}