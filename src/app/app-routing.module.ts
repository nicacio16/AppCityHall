import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'salvar-usuario', loadChildren: './usuario/salvar/salvar.module#SalvarPageModule' },
  { path: 'salvar-ouvidoria', loadChildren: './ouvidoria/salvar/salvar.module#SalvarPageModule' },
  { path: 'listar-ouvidoria', loadChildren: './ouvidoria/listar/listar.module#ListarPageModule' },
  { path: 'salvar-guarda-municipal', loadChildren: './guarda-municipal/salvar/salvar.module#SalvarPageModule' },
  { path: 'listar-guarda-municipal', loadChildren: './guarda-municipal/listar/listar.module#ListarPageModule' },
  { path: 'salvar-descarte', loadChildren: './coleta-lixo/salvar/salvar.module#ColetaSalvarPageModule' },
  { path: 'listar-descarte', loadChildren: './coleta-lixo/listar/listar.module#ListarPageModule' },
  { path: 'salvar-asfalto-novo', loadChildren: './asfalto-novo/salvar/salvar.module#SalvarPageModule' },
  { path: 'listar-asfalto-novo', loadChildren: './asfalto-novo/listar/listar.module#ListarPageModule' },
  { path: 'salvar-iluminacao-publica', loadChildren: './iluminacao-publica/salvar/salvar.module#SalvarPageModule' },
  { path: 'listar-iluminacao-publica', loadChildren: './iluminacao-publica/listar/listar.module#ListarPageModule' },
  { path: 'salvar-meio-ambiente', loadChildren: './meio-ambiente/salvar/salvar.module#SalvarPageModule' },
  { path: 'listar-meio-ambiente', loadChildren: './meio-ambiente/listar/listar.module#ListarPageModule' },
  { path: 'salvar-iptu', loadChildren: './iptu/salvar/salvar.module#SalvarPageModule' },
  { path: 'listar-iptu', loadChildren: './iptu/listar/listar.module#ListarPageModule' },
  { path: 'salvar-servico-social', loadChildren: './servico-social/salvar/salvar.module#SalvarPageModule' },
  { path: 'listar-servico-social', loadChildren: './servico-social/listar/listar.module#ListarPageModule' },
  { path: 'salvar-creche', loadChildren: './creche/salvar/salvar.module#CrecheSalvarPageModule' },
  { path: 'listar-creche', loadChildren: './creche/listar/listar.module#ListarPageModule' },
  { path: 'salvar-logout', loadChildren: './logout/salvar/salvar.module#SalvarPageModule' },
  { path: 'salvar-recuperar-senha', loadChildren: './recuperar-senha/salvar/salvar.module#SalvarPageModule' },
  { path: 'salvar-categoria-lixo', loadChildren: './categoria-lixo/salvar/salvar.module#CategoriaSalvarPageModule' },
  { path: 'listar-categoria-lixo', loadChildren: './categoria-lixo/listar/listar.module#ListarPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
