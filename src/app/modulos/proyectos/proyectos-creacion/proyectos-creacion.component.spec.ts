/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosCreacionComponent } from './proyectos-creacion.component';

describe('ProyectosCreacionComponent', () => {
  let component: ProyectosCreacionComponent;
  let fixture: ComponentFixture<ProyectosCreacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProyectosCreacionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosCreacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
