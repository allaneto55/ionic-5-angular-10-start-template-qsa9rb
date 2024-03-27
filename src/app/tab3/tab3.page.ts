import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
    });
  }

  whats() {
    this.abrirUrl(
      'https://api.whatsapp.com/send?phone=351933431157&text=Ol!%20Tudo%20Bem?'
    );
  }
  abrirUrl(url: string) {
    window.open(url, '_blank').focus();
  }

  enviar() {
    console.log('enviei');
  }
}
