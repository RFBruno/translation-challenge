import { Component, Input, OnInit } from '@angular/core';

import { Coracao } from '../../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})
export class TentativasComponent implements OnInit{

  @Input() public tentativas: number = 0;

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true),
  ]

  constructor() { }

  ngOnChanges(): void{
    if(this.coracoes.length != this.tentativas){
      let indice = this.coracoes.length - this.tentativas;
      this.coracoes[indice - 1].cheio = false;
    }
  }

  ngOnInit(): void {

  }

}
