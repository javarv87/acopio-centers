import { Component, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';

import { Centro } from './../../common/centro';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-modal-centro',
  templateUrl: './modal-centro.component.html',
  styleUrls: ['./modal-centro.component.sass']
})
export class ModalCentroComponent {
  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;
  states: any[] = [
    {
      id: 1,
      name: 'Arkansas',
      abreviation: 'ARK',
      population: '2.978M'
    },
    {
      id: 2,
      name: 'California',
      abreviation: 'CA',
      population: '39.14M'
    },
    {
      id: 3,
      name: 'Florida',
      abreviation: 'FLR',
      population: '20.27M'
    },
    {
      id: 4,
      name: 'Texas',
      abreviation: 'TX',
      population: '27.47M'
    }
  ];

  constructor(
    public dialogRef: MdDialogRef<ModalCentroComponent>,
    @Inject(MD_DIALOG_DATA) public centro: Centro
  ) {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .startWith(null)
      .map(state => state ? this.filterStates(state) : this.states.slice());
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  filterStates(name: string) {
    return this.states.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
}
