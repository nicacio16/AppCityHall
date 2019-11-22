import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CategoriaLixo } from '../categoria-lixo';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-salvar',
  templateUrl: './salvar.page.html',
  styleUrls: ['./salvar.page.scss'],
})
export class SalvarPage implements OnInit {

  opcao: CategoriaLixo = new CategoriaLixo();

  constructor(private fire: AngularFireDatabase, private modal: ModalController) { }

  salvar(){
    if(this.opcao.key == null){
      this.fire.list('opcao').push(this.opcao);
      this.opcao = new CategoriaLixo();
      alert('Categoria cadastrada com sucesso!')
    }else{
      this.fire.object('categoria/'+this.opcao.key).update(this.opcao);
      this.modal.dismiss();
    }
    
  }

  ngOnInit() {
  }

}
