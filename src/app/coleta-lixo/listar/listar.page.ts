import { SalvarPage } from 'src/app/coleta-lixo/salvar/salvar.page';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ColetaLixo } from '../coleta-lixo';
import { AngularFireDatabase } from '@angular/fire/database';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  listaColeta: Observable<ColetaLixo[]>;

  constructor(private fire: AngularFireDatabase, private modal: ModalController) {
    this.listaColeta = this.fire.list<ColetaLixo>('coleta').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
  }

  async alterar(coleta) {
    const tela = await this.modal.create({
      component: SalvarPage, componentProps: { coleta: coleta }
    })
    tela.present();
  }

  excluir(key: string) {
    this.fire.object(`coleta/${key}`).remove();
  }

  ngOnInit() {
  }

}
