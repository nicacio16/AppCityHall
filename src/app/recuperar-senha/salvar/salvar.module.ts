import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalvarPage } from './salvar.page';
import { AngularFireAuth } from 'angularfire2/auth';

const routes: Routes = [
  {
    path: '',
    component: SalvarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalvarPage],
  providers: [AngularFireAuth]
})
export class SalvarPageModule {}
