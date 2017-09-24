import { Component, OnInit } from '@angular/core';
import { MatDialog, MdSnackBar } from '@angular/material';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { Centro } from './../../common/centro';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-centros',
  templateUrl: './centros.component.html',
  styleUrls: ['./centros.component.sass']
})
export class CentrosComponent implements OnInit {
  user: Observable<firebase.User>;
  centros: FirebaseListObservable<Centro[]>;
  centro: Centro = new Centro();

  constructor(
    public af: AngularFireDatabase,
    public snackBar: MdSnackBar
  ) {}

  ngOnInit() {
    this.centros = this.af.list('/centros', {
      query: {
        limitToLast: 50
      }
    });
  }

  // createCenter(name: string) {
  //   this.centros.push({ name: name });
  //   this.centro = new Centro();
  // }
}
