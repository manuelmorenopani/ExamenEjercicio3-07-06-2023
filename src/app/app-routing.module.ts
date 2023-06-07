import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentevisualizarAutobusesyvisitasComponent } from './componentevisualizar-autobusesyvisitas/componentevisualizar-autobusesyvisitas.component';

const routes: Routes = [
  { path: '', component: ComponentevisualizarAutobusesyvisitasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
