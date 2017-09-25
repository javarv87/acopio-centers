import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { DataSource } from '@angular/cdk/collections';
import { AngularFireDatabase } from 'angularfire2/database';
import { CentrosService } from './../../../common/services/centros.service';
import { StatesService } from './../../../common/services/estados.service';
import { Centro, Contact } from './../../../common/centro';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-centro',
  templateUrl: './centro.component.html',
  styleUrls: ['./centro.component.sass'],
  providers: [CentrosService, StatesService]
})
export class CentroComponent implements OnInit {
  isLinear = true;
  acopioCenter: Centro = new Centro();
  acopioCenterForm: FormGroup;
  contactsCenterForm: FormGroup;
  filteredStates: Observable<any[]>;
  states: Array<any>;
  // Table
  displayedColumns = ['contactName', 'phoneNumber', 'actions'];
  contactsCenter = new ContactsArray();
  dataSource: ContactsDataSource | null;

  constructor(
    private fb: FormBuilder,
    public centrosService: CentrosService,
    private statesService: StatesService,
    public db: AngularFireDatabase,
    public meta: Meta,
    public title: Title
  ) {
    this.title.setTitle('Centros de Acopio | Como Ayudar MX');
    this.meta.addTags([
      { name: 'author', content: 'javarv87.github.io' },
      { name: 'keywords', content: 'sismoMX, comoayudarMX' },
      { name: 'description', content: 'Esta es una plataforma de apoyo al sismo ocurrido el 19/9' }
    ]);
  }

  ngOnInit() {
    this.acopioCenterForm = this.fb.group({
      name: [null, Validators.required],
      state: [null, Validators.required],
      city: [null, Validators.required],
      cp: '',
      address: [null, Validators.required],
      reference: '',
      type: '',
      workingHour: '',
      contacts: this.fb.array([]),
      closeDate: ''
    });
    this.contactsCenterForm = this.fb.group({
      contactName: '',
      phoneNumber: ''
    });
    this.states = this.statesService.getStates();
    this.filteredStates = this.acopioCenterForm.valueChanges
      .startWith(null)
      .map(value => (value && value.state) ? this.filterStates(value.state) : this.states.slice());
  }

  filterStates(name: string) {
    return this.states.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  get control() {
    return this.acopioCenterForm.get('contacts') as FormArray;
  }

  addContact(contact: Contact) {
    this.contactsCenter.createNewContact(contact);
    this.dataSource = new ContactsDataSource(this.contactsCenter);
    this.contactsCenterForm.reset();
  }

  removeContact(contact: Contact) {
    this.contactsCenter.deleteContact(contact);
    this.dataSource = new ContactsDataSource(this.contactsCenter);
  }

  saveCenter(acopioCenter): void {
    this.acopioCenter.name = acopioCenter.name;
    this.acopioCenter.state = acopioCenter.state;
    this.acopioCenter.city = acopioCenter.city;
    this.acopioCenter.address = acopioCenter.address;
    this.centrosService.createAcopioCenter(this.acopioCenter);
  }
}

export class ContactsArray {
  dataChange: BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>([]);
  lastId = 0;
  get data(): Contact[] { return this.dataChange.value; }

  createNewContact(contact: Contact) {
    const copiedData = this.data;
    if (!contact.id) {
      contact.id = ++this.lastId;
    }
    copiedData.push(contact);
    return this.dataChange.next(copiedData);
  }

  deleteContact(contact: Contact) {
    const copiedData = this.data;
    const filterData = copiedData.filter(contactCopy => contactCopy.id !== contact.id);
    return this.dataChange.next(filterData);
  }
}

export class ContactsDataSource extends DataSource<any> {
  constructor(private contactsArray: ContactsArray) {
    super();
  }

  connect(): Observable<Contact[]> {
    return Observable.of(this.contactsArray.data);
  }

  disconnect() { }

}
