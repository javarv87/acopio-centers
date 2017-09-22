import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Centro } from './common/centro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  user: Observable<firebase.User>;
  centros: FirebaseListObservable<Centro[]>;
  centro: Centro =  new Centro();

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.centros = af.list('/centros', {
      query: {
        limitToLast: 50
      }
    });
  }

  Send(name: string) {
    this.centros.push({name: name});
    this.centro = new Centro();
  }
}
