import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Livros } from './livros.model';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html'
})
export class LivroComponent {
  livrosForm: FormGroup;
  livros: Livros[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.livrosForm = this.formBuilder.group({
      titulo: [''],
      autor: [''],
      data: ['']
    });
  }

  onSubmit(): void {
    const livros: Livros = this.livrosForm.value;
    this.livros.push(livros);
    this.livrosForm.reset();
  }
}