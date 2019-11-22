import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ouvidoria } from '../ouvidoria';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  listaOuvidoria: Observable<Ouvidoria[]>;

  constructor(private fire: AngularFireDatabase) {
    this.listaOuvidoria = this.fire.list<Ouvidoria>('ouvidoria').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
  }

  excluir(key: string) {
    this.fire.object(`ouvidoria/${key}`).remove();
  }

  ngOnInit() {
  }

}
