import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';
import { Usuario } from '../usuario/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private afAuth: AngularFireAuth, private router: Router) { }
 
  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.usuario.email, this.usuario.senha).then((res) => {
      this.router.navigate(['home']);
    }).catch((err) => console.log('error: ' + err));
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['login']);
  }

  recuperarSenha() {
    this.afAuth.auth.sendPasswordResetEmail(this.usuario.email).then(() => {
      console.log("Sua senha foi enviada para o email cadastrado!");
    }).catch((err) => console.log('error: ' + err));
  }

  recuperar() {
    this.afAuth.auth.signOut;
  }

  ngOnInit() {
  }

}
