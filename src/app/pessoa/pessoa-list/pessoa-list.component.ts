import { Component } from '@angular/core';

@Component({
  selector: 'app-pessoalist',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.scss']
})
export class PessoalistComponent {
  pessoas: any[] = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 35 },
    { nome: 'Carlos', idade: 28 },
  ];
}