import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Carro } from './carro.model';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html'
})
export class CarroComponent {
  carroForm: FormGroup;
  carros: Carro[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.carroForm = this.formBuilder.group({
      nome: [''],
      ano: ['']
    });
  }

  onSubmit(): void {
    const carro: Carro = this.carroForm.value;
    this.carros.push(carro);
    this.carroForm.reset();
  }
}