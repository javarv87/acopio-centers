import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCentroComponent } from './modal-centro.component';

describe('ModalCentroComponent', () => {
  let component: ModalCentroComponent;
  let fixture: ComponentFixture<ModalCentroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCentroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
