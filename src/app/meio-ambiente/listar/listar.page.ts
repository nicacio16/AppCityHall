import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MeioAmbiente } from '../meio-ambiente';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  listaAmbiente: Observable<MeioAmbiente[]>;

  constructor(private fire: AngularFireDatabase) {
    this.listaAmbiente = this.fire.list<MeioAmbiente>('ambiente').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
  }

  excluir(key: string) {
    this.fire.object(`ambiente/${key}`).remove();
  }

  ngOnInit() {
  }

}
