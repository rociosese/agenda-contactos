import { Component, inject, input, OnInit, signal } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { form, FormField } from '@angular/forms/signals';
import { ContactsService } from '../../services/contactsService';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Auth } from '../../services/auth';

@Component({
  imports: [FormField],
  selector: 'app-create-edit-contact',
  styleUrl: './create-edit-contact.scss',
  templateUrl: './create-edit-contact.html',
})
export class CreateEditContact implements OnInit {

  authService = inject(Auth);
  contactsService = inject(ContactsService);
  router = inject(Router);

  id = input<number>();

  newContactModel = signal<Contact>({
    id: 0,
    firstName: '',
    lastName: '',
    number: '',
    isFavorite: false,
    groupIds: []
  });

  formCreateContact = form(this.newContactModel);

  async ngOnInit(): Promise<void> {
    if (this.id()) {
      const contacto = await this.contactsService.getContactById(this.id()!);
      if (contacto) {
        this.newContactModel.set(contacto);
      }
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();

    if (this.id()) {
      this.editarContacto();
    } else {
      this.crearContacto();
    }
  }

  private toast(title: string, icon: 'success' | 'error' = 'success') {
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
    }).fire({ icon, title });
  }

  async crearContacto() {
    const contactoCreado = await this.contactsService.agregarContacto(this.newContactModel());
    if (!contactoCreado) {
      this.toast('No se pudo crear el contacto', 'error');
      return;
    }
    this.toast('Contacto creado correctamente');
    this.router.navigate(['/contacts', contactoCreado.id]);
  }

  async editarContacto() {
    const ok = await this.contactsService.editContact(this.newContactModel());
    if (!ok) {
      this.toast('No se pudo editar el contacto', 'error');
      return;
    }
    this.toast('Contacto editado');
    this.router.navigate(['/contacts', this.newContactModel().id]);
  }
}