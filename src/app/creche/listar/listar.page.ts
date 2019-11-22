import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Creche } from '../creche';
import { AngularFireDatabase } from '@angular/fire/database';
import { SalvarPage } from '../salvar/salvar.page';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  listaCreche: Observable<Creche[]>;

  constructor(private fire: AngularFireDatabase, private modal: ModalController) {
    this.listaCreche = this.fire.list<Creche>('vaga').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
  }

  async alterar(vaga){
    const tela = await this.modal.create({
      component: SalvarPage, componentProps: { vaga: vaga }
    })
    tela.present();
  }

  excluir(key: string) {
    this.fire.object(`vaga/${key}`).remove();
  }

  ngOnInit() {
  }

}
