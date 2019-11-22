import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Creche } from '../creche';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-salvar',
  templateUrl: './salvar.page.html',
  styleUrls: ['./salvar.page.scss'],
})
export class SalvarPage implements OnInit {

  vaga: Creche = new Creche();

  constructor(private fire: AngularFireDatabase, private modal: ModalController) { }

  salvar(){
    if(this.vaga.key == null){
      this.fire.list('vaga').push(this.vaga);
      this.vaga = new Creche();
      alert('Solicitação de vaga enviada!');
    }else{
      this.fire.object('vaga/'+this.vaga.key).update(this.vaga);
      this.modal.dismiss();
    }
    
  }

  ngOnInit() {
  }

}
