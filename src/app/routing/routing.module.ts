import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentrosComponent } from './../components/centros/centros.component';

const routes: Routes = [
  { path: '', component: CentrosComponent }
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
