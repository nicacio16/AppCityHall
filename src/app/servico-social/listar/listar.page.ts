import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServicoSocial } from '../servico-social';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  listaSocial: Observable<ServicoSocial[]>;

  constructor(private fire: AngularFireDatabase) {
    this.listaSocial = this.fire.list<ServicoSocial>('pessoa').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
  }

  excluir(key: string) {
    this.fire.object(`pessoa/${key}`).remove();
  }

  ngOnInit() {
  }

}
