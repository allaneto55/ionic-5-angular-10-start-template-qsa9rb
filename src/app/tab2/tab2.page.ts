import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor() {}

  doarAlimentos() {
    this.abrirUrl
    ('https://www.google.com/maps/search/?api=1&query=Doação+Alimento'

    );
  }
  doarRoupas() {
    this.abrirUrl
    ('https://www.google.com/maps/search/?api=1&query=Contentores+de+doação+de+roupa+usada'

    );
  }
  doarSangue() {
    this.abrirUrl
    ('https://www.google.com/maps/search/?api=1&query=Doar+Sangue'

    );
  }
 

  abrirUrl(url: string) {
  window.open(url,'_blank').focus();
 }
}
