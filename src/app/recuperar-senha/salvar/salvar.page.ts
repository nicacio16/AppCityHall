import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';
import { Usuario } from 'src/app/usuario/usuario';

@Component({
  selector: 'app-salvar',
  templateUrl: './salvar.page.html',
  styleUrls: ['./salvar.page.scss'],
})
export class SalvarPage implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  recuperarSenha() {
    this.afAuth.auth.sendPasswordResetEmail(this.usuario.email).then(() => {
      console.log("Sua senha foi enviada para o email cadastrado!");
    }).catch((err) => console.log('error: ' + err));
  }

  ngOnInit() {
  }

}
