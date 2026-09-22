import { Service } from '@angular/core';
import { Contact } from '../interfaces/contact'

@Service()
export class ContactsService {

    contactslist: Contact[] = [
        {
    id: "1",
    nombre: "Rocio",
    apellido: "Sese",
    email: "rocio.sese@gmail.com",
    numeroTelefono: "3415123456",
    direccion: "Mendoza 1250"
  },
  {
    id: "2",
    nombre: "Juan",
    apellido: "Perez",
    email: "juan.perez@gmail.com",
    numeroTelefono: "3415234567",
    direccion: "Cordoba 1840"
  },
  {
    id: "3",
    nombre: "Martina",
    apellido: "Gomez",
    email: "martina.gomez@gmail.com",
    numeroTelefono: "3415345678",
    direccion: "San Juan 950"
  },
  {
    id: "4",
    nombre: "Lucas",
    apellido: "Fernandez",
    email: "lucas.fernandez@gmail.com",
    numeroTelefono: "3415456789",
    direccion: "Santa Fe 2230"
  },
  {
    id: "5",
    nombre: "Camila",
    apellido: "Rodriguez",
    email: "camila.rodriguez@gmail.com",
    numeroTelefono: "3415567890",
    direccion: "Italia 1465"
  },
  {
    id: "6",
    nombre: "Tomas",
    apellido: "Martinez",
    email: "tomas.martinez@gmail.com",
    numeroTelefono: "3415678901",
    direccion: "Entre Rios 780"
  },
  {
    id: "7",
    nombre: "Sofia",
    apellido: "Lopez",
    email: "sofia.lopez@gmail.com",
    numeroTelefono: "3415789012",
    direccion: "Callao 1340"
  },
  {
    id: "8",
    nombre: "Franco",
    apellido: "Garcia",
    email: "franco.garcia@gmail.com",
    numeroTelefono: "3415890123",
    direccion: "Dorrego 2015"
  },
  {
    id: "9",
    nombre: "Valentina",
    apellido: "Romero",
    email: "valentina.romero@gmail.com",
    numeroTelefono: "3415901234",
    direccion: "Laprida 1670"
  },
  {
    id: "10",
    nombre: "Nicolas",
    apellido: "Diaz",
    email: "nicolas.diaz@gmail.com",
    numeroTelefono: "3415012345",
    direccion: "Buenos Aires 1120"
  }
];

agregarContacto(nuevoContacto: Contact){
  const nuevoId = (this.contactslist.length + 1).toString();

  this.contactslist.push({
    id: nuevoId,
    nombre: nuevoContacto.nombre,
    apellido: nuevoContacto.apellido,
    numeroTelefono: nuevoContacto.numeroTelefono
  });
  return nuevoId;
}

getContactById(id: string) {
    const contactoEncontrado = this.contactslist.find(
        contact => contact.id === id);

        return contactoEncontrado;
    }

deleteContact(id: string){
  this.contactslist = this.contactslist.filter(contact => contact.id !== id);
    }
  }