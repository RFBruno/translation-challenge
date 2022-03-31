import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Frase } from '../../shared/frase.model'
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase:';
  public resposta: string = '';
  public rodada: number = 0;
  public progresso: number = 0;
  public tentativas: number = 3;

  @Output() public encerrarJogo : EventEmitter<string> = new EventEmitter();

  constructor() { 
  }

  ngOnInit(): void {
    
  }

  public atualizaResposta(e:Event): void {
    this.resposta = (<HTMLInputElement>e.target).value;
  }

  public verificarResposta(): void {
    if(this.formataFrase(this.resposta) == this.formataFrase(this.frases[this.rodada].frasePtBr)){
      this.progresso += (100 / this.frases.length);
      if(this.rodada === 3){
        this.encerrarJogo.emit('vitoria');
        return;
      }
      this.rodada++;
    }else{
      this.tentativas--;

      if(this.tentativas === 0){
        this.encerrarJogo.emit('derrota');
      }
    }

    this.resposta = '';
  }

  public formataFrase(value: string): string{
    return value.replace(/\s/g, '').toLowerCase();
  }

}
