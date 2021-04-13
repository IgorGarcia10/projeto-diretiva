import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Diretiva';

  contador = 0;

  contaId(contador){
    return contador = contador+1;
  }
  
  pessoas = [
    { id: this.contador ,nome: "José", idade: 18, cidade: "São Paulo", estado: "São Paulo"},
    { id: this.contador, nome: "Maria", idade: 23, cidade: "Rio Janeiro", estado: "Rio de janeiro" }
  ];

  textoBotao = "Esconder";
  esconder = false;
  alterarExibicao() {
    this.textoBotao = this.esconder ? "Esconder" : "Exibir";
    this.esconder = !this.esconder;
  }

  adicionar(id,nome, idade, cidade, estado) {
    this.pessoas = [{ id: id, nome: nome, idade: idade, cidade: cidade, estado: estado}, ...this.pessoas];
  }

  pegarCor(idade){
    return idade >=40 ? "red" : "blue";
  }
  
}
