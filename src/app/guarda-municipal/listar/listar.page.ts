import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GuardaMunicipal } from '../guarda-municipal';
import { AngularFireDatabase } from '@angular/fire/database';
import * as _ from 'lodash';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  listaDenuncia: Observable<GuardaMunicipal[]>;

  listaFiltro: GuardaMunicipal[];
  filtro = {}; //regras ativas do filtro
  guardas: any;
  valor: string;

  constructor(private fire: AngularFireDatabase) {
    this.listaDenuncia = this.fire.list<GuardaMunicipal>('guarda').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
  }

  excluir(key: string) {
    this.fire.object(`guarda/${key}`).remove();
  }

  ngOnInit() {
    this.listaDenuncia.subscribe(guarda => {
      this.guardas = guarda;
      this.listaFiltro = _.filter(this.guardas, _.conforms(this.filtro));
    })
  }

  filtrar() {
    this.filtro['denuncia'] = val => val.includes(this.valor);
    this.listaFiltro = _.filter(this.guardas, _.conforms(this.filtro));
  }


}
