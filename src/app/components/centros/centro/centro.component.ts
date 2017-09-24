import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { CentrosService } from './../../../common/services/centros.service';
import { StatesService } from './../../../common/services/estados.service';
import { Centro } from './../../../common/centro';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-centro',
  templateUrl: './centro.component.html',
  styleUrls: ['./centro.component.sass'],
  providers: [CentrosService, StatesService]
})
export class CentroComponent implements OnInit {
  acopioCenter: Centro = new Centro();
  acopioCenterForm: FormGroup = new FormGroup({
    name: new FormControl(),
    state: new FormControl(),
    city: new FormControl(),
    cp: new FormControl(),
    address: new FormControl(),
    reference: new FormControl(),
    type: new FormControl(),
    workingHour: new FormControl(),
    contacts: new FormControl(),
    closeDate: new FormControl()
  });
  filteredStates: Observable<any[]>;
  states: Array<any>;

  constructor(
    public centrosService: CentrosService,
    private statesService: StatesService,
    public af: AngularFireDatabase,
  ) {
    this.filteredStates = this.acopioCenterForm.valueChanges
      .startWith(null)
      .map(value => (value && value.state) ? this.filterStates(value.state) : this.states.slice());
  }

  ngOnInit() {
    this.states = this.statesService.getStates();
  }

  filterStates(name: string) {
    return this.states.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  saveCenter(acopioCenter: Centro): void {
    this.centrosService.createAcopioCenter(acopioCenter);
  }
}
