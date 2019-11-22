import { Component, OnInit } from '@angular/core';
import { MeioAmbiente } from '../meio-ambiente';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-salvar',
  templateUrl: './salvar.page.html',
  styleUrls: ['./salvar.page.scss'],
})
export class SalvarPage implements OnInit {

  ambiente: MeioAmbiente = new MeioAmbiente();

  constructor(private fire: AngularFireDatabase) { }

  salvar(){
    this.fire.list('ambiente').push(this.ambiente);
    this.ambiente = new MeioAmbiente();
    alert('Solicitação enviada com sucesso!')
  }

  ngOnInit() {
  }

}
