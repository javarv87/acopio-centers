import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { CentrosService } from './../../common/services/centros.service';
import { Centro } from './../../common/centro';
import { FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-centros',
  templateUrl: './centros.component.html',
  styleUrls: ['./centros.component.sass'],
  providers: [CentrosService]
})
export class CentrosComponent implements OnInit {
  public centros: FirebaseListObservable<Centro[]>;
  centro: Centro = new Centro();

  constructor(
    public centrosService: CentrosService,
    public snackBar: MdSnackBar
  ) {}

  ngOnInit() {
    this.centros = this.centrosService.getAcopioCenters({limitToLast: 10});
  }

  // createCenter(name: string) {
  //   this.centros.push({ name: name });
  //   this.centro = new Centro();
  // }
}
