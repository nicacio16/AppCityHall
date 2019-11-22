import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Ouvidoria } from '../ouvidoria';

@Component({
  selector: 'app-salvar',
  templateUrl: './salvar.page.html',
  styleUrls: ['./salvar.page.scss'],
})
export class SalvarPage implements OnInit {
  
  ouvidoria: Ouvidoria = new Ouvidoria();

  constructor(private fire: AngularFireDatabase) { }

  salvar() {
    this.fire.list('ouvidoria').push(this.ouvidoria);
    this.ouvidoria = new Ouvidoria();
    alert("Reclamação salva com sucesso!");
  }

  ngOnInit() {
  }
}
