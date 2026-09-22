import { Component, inject, input, OnInit } from '@angular/core';
import { ContactsService }  from '../../services/contactsService';
import { Contact } from '../../interfaces/contact';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-contact-details',
  styleUrl: './contact-details.scss',
  templateUrl: './contact-details.html',
})
export class ContactDetails implements OnInit {

  id = input.required<string>();
  contacto: Contact | undefined;
  contactsService = inject(ContactsService);

  ngOnInit(): void {
    this.contacto = this.contactsService.getContactById(this.id());
  }

}