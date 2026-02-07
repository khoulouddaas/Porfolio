import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'] // ✅ MUST be styleUrls
})
export class ContactComponent {

  name = '';
  email = '';
  message = '';

  loading = false;
  success = false;
  error = false;

  constructor(private contactService: ContactService) {}
  sendMessage() {
  this.loading = true;
  this.success = false;
  this.error = false;

  console.log('FORM VALUES', this.name, this.email, this.message);

  this.contactService.send({
    name: this.name,
    email: this.email,
    message: this.message
  }).subscribe({
    next: () => {
      this.loading = false;
      this.success = true;
      this.error = false;
      this.name = '';
      this.email = '';
      this.message = '';
    },
    error: () => {
      this.loading = false;
      this.success = false;
      this.error = true;
    }
  });
}

}
