import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material/material.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { RoutingModule } from './routing/routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { CentrosComponent } from './components/centros/centros.component';
import { ModalCentroComponent } from './components/modal-centro/modal-centro.component';

@NgModule({
  declarations: [
    AppComponent,
    CentrosComponent,
    ModalCentroComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FlexLayoutModule
  ],
  providers: [],
  entryComponents: [
    ModalCentroComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
