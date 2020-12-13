import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonNavigateComponent } from './button-navigate/button-navigate.component';
import { ProgNavigateComponent } from './prog-navigate/prog-navigate.component';

const routes: Routes = [
  { path: 'btnRoute', component: ButtonNavigateComponent },
  { path: 'progRoute', component: ProgNavigateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
