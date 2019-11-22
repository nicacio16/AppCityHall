import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Iptu } from '../iptu';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  listaIptu: Observable<Iptu[]>;

  constructor(private fire: AngularFireDatabase) {
    this.listaIptu = this.fire.list<Iptu>('boleto').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
  }

  excluir(key: string) {
    this.fire.object(`boleto/${key}`).remove();
  }

  ngOnInit() {
  }

}
