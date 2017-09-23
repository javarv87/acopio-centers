import { Component, OnInit } from '@angular/core';
import { MatDialog, MdSnackBar } from '@angular/material';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { Centro } from './../../common/centro';
import { Observable } from 'rxjs/Observable';
import { ModalCentroComponent } from './../modal-centro/modal-centro.component';

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
    public dialog: MatDialog,
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

  openDialog(): void {
    this.centro = new Centro();
    const dialogRef = this.dialog.open(ModalCentroComponent, {
      data: this.centro
    });

    dialogRef.afterClosed().subscribe(result => {
        this.centros.push(result);
        this.snackBar.open('Se creó un nuevo centro de acopio', 'OK', {
          duration: 2000,
        });
        this.centro = new Centro();
    });
  }

}
