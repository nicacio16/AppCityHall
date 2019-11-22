import { Component, OnInit } from '@angular/core';
import { ServicoSocial } from '../servico-social';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-salvar',
  templateUrl: './salvar.page.html',
  styleUrls: ['./salvar.page.scss'],
})
export class SalvarPage implements OnInit {

  pessoa: ServicoSocial = new ServicoSocial();

  constructor(private fire: AngularFireDatabase) { }

  salvar(){
    this.fire.list('pessoa').push(this.pessoa);
    this.pessoa = new ServicoSocial();
    alert('Solicitação enviada com sucesso!')
  }

  ngOnInit() {
  }

}
