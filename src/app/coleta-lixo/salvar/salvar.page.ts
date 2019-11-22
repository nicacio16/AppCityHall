import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ColetaLixo } from '../coleta-lixo';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CategoriaLixo } from 'src/app/categoria-lixo/categoria-lixo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salvar',
  templateUrl: './salvar.page.html',
  styleUrls: ['./salvar.page.scss'],
})
export class SalvarPage implements OnInit {

  coleta: ColetaLixo = new ColetaLixo();

  listaCategoria: Observable<CategoriaLixo[]>;

  constructor(private fire: AngularFireDatabase, private rota: Router, private modal: ModalController) {
    this.listaCategoria = this.fire.list<CategoriaLixo>('opcao').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
  }

  salvar() {
    if(this.coleta.key == null){
      this.fire.list('coleta').push(this.coleta);
      this.coleta = new ColetaLixo();
      alert('Solicitação de coleta enviada com sucesso!');
    }else{
      this.fire.object('coleta/'+this.coleta.key).update(this.coleta);
      this.modal.dismiss();
    }
    
  }

  ngOnInit() {
  }

}
