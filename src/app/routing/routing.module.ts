import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentrosComponent } from './../components/centros/centros.component';
import { CentroComponent } from './../components/centros/centro/centro.component';

const routes: Routes = [
  { path: '', component: CentrosComponent },
  { path: 'centros', component: CentrosComponent },
  { path: 'centros/nuevo', component: CentroComponent },
  { path: 'centros/:id', component: CentroComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
