import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';

@Component({
  selector: 'app-salvar',
  templateUrl: './salvar.page.html',
  styleUrls: ['./salvar.page.scss'],
})
export class SalvarPage implements OnInit {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['login']);
  }
  
  ngOnInit() {
  }

}
