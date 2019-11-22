import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-salvar',
  templateUrl: './salvar.page.html',
  styleUrls: ['./salvar.page.scss'],
})
export class SalvarPage implements OnInit {
  
  usuario: Usuario = new Usuario();

  constructor(private fire: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router) {}
  
  salvar() {
    this.fire.list('usuario').push(this.usuario);
    this.usuario = new Usuario();
    alert("Usuário salvo com sucesso!");
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['login']);
  }

  ngOnInit() {
  }
}
