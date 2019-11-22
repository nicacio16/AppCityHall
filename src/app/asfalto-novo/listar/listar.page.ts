import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsfaltoNovo } from '../asfalto-novo';
import { AngularFireDatabase } from '@angular/fire/database';
import { ModalController } from '@ionic/angular';
import { SalvarPage } from '../salvar/salvar.page';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  listaAsfalto: Observable<AsfaltoNovo[]>;

  constructor(private fire: AngularFireDatabase, private modal: ModalController) {
    this.listaAsfalto = this.fire.list<AsfaltoNovo>('asfalto').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
   }

  async alterar(asfalto) {
    const tela = await this.modal.create({
      component: SalvarPage, componentProps: { asfalto: asfalto }
    })
    tela.present();
  }

  excluir(key: string) {
    this.fire.object(`asfalto/${key}`).remove();
  }

  ngOnInit() {
  }

}
