import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  @Output() pessoaAdicionada = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  pessoas = [
    { nome: "José", idade: 18 },
    { nome: "Maria", idade: 22 }
    ];
    adicionar(nome, idade, cidade, estado) {
      const pessoa = {
      nome: nome,
      idade: idade,
      cidade: cidade,
      estado: estado
      };
      this.pessoaAdicionada.emit(pessoa);
      }

}
