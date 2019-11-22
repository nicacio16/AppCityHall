import { Component, OnInit } from '@angular/core';
import { IluminacaoPublica } from '../iluminacao-publica';
import { AngularFireDatabase } from '@angular/fire/database';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-salvar',
  templateUrl: './salvar.page.html',
  styleUrls: ['./salvar.page.scss'],
})
export class SalvarPage implements OnInit {

  iluminacao: IluminacaoPublica = new IluminacaoPublica();

  currentImage: any;

  constructor(private fire: AngularFireDatabase, private camera: Camera) { }

  salvar(){
    this.fire.list('iluminacao').push(this.iluminacao);
    this.iluminacao = new IluminacaoPublica();
    alert('Solicitação enviada com sucesso!')
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
