import { Component, OnInit } from '@angular/core';
import { Iptu } from '../iptu';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-salvar',
  templateUrl: './salvar.page.html',
  styleUrls: ['./salvar.page.scss'],
})
export class SalvarPage implements OnInit {

  boleto: Iptu = new Iptu();

  constructor(private fire: AngularFireDatabase) { }

  salvar(){
    this.fire.list('boleto').push(this.boleto);
    this.boleto = new Iptu();
    alert('Solicitação enviada com sucesso!');
  }


  ngOnInit() {
  }

}
