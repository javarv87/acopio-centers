import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Centro } from './../../common/centro';

@Component({
  selector: 'app-centros',
  templateUrl: './centros.component.html',
  styleUrls: ['./centros.component.sass']
})
export class CentrosComponent implements OnInit {
  user: Observable<firebase.User>;
  centros: FirebaseListObservable<Centro[]>;
  centro: Centro = new Centro();

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {}

  Send(name: string) {
    this.centros.push({ name: name });
    this.centro = new Centro();
  }

  ngOnInit() {
    this.centros = this.af.list('/centros', {
      query: {
        limitToLast: 50
      }
    });
  }

}
