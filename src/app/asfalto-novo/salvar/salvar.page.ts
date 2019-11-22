import { Component, OnInit } from '@angular/core';
import { AsfaltoNovo } from '../asfalto-novo';
import { AngularFireDatabase } from '@angular/fire/database';
import { ModalController } from '@ionic/angular';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-salvar',
  templateUrl: './salvar.page.html',
  styleUrls: ['./salvar.page.scss'],
})
export class SalvarPage implements OnInit {

  asfalto: AsfaltoNovo = new AsfaltoNovo();

  currentImage: any;

  constructor(private fire: AngularFireDatabase, private modal: ModalController, private camera: Camera) {}

  salvar(){
    if(this.asfalto.key == null){
      this.fire.list('asfalto').push(this.asfalto);
      this.asfalto = new AsfaltoNovo();
      alert('Solicitação enviada com sucesso!')
    }else{
      this.fire.object('asfalto/'+this.asfalto.key).update(this.asfalto);
      this.modal.dismiss();
    }    
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      console.log("Camera issue:" + err);
    });
  }

  ngOnInit() {
  }

}
