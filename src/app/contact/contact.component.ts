import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
    goToFacebook(): void {
      window.open('https://www.facebook.com/votre-page', '_blank'); // Remplacez "votre-page" par l'URL de votre page Facebook
    }

}
