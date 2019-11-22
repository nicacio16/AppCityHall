import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CategoriaLixo } from '../categoria-lixo';
import { AngularFireDatabase } from '@angular/fire/database';
import { SalvarPage } from 'src/app/categoria-lixo/salvar/salvar.page';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  listaCategoria: Observable<CategoriaLixo[]>;

  constructor(private fire: AngularFireDatabase, private modal: ModalController) {
    this.listaCategoria = this.fire.list<CategoriaLixo>('categoria').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
  }

  async alterar(opcao){
    const tela = await this.modal.create({
      component: SalvarPage, componentProps: { opcao :  opcao}
    })

    tela.present();
  }

  excluir(key: string) {
    this.fire.object(`categoria/${key}`).remove();
  }

  ngOnInit() {
  }

}
