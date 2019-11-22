import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IluminacaoPublica } from '../iluminacao-publica';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  listaIluminacao: Observable<IluminacaoPublica[]>;

  constructor(private fire: AngularFireDatabase) {
    this.listaIluminacao = this.fire.list<IluminacaoPublica>('iluminacao').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
  }

  excluir(key: string) {
    this.fire.object(`iluminacao/${key}`).remove();
  }

  ngOnInit() {
  }

}
