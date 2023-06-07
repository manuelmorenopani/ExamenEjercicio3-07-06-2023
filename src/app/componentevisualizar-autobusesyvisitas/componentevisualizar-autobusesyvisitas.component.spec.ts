import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentevisualizarAutobusesyvisitasComponent } from './componentevisualizar-autobusesyvisitas.component';

describe('ComponentevisualizarAutobusesyvisitasComponent', () => {
  let component: ComponentevisualizarAutobusesyvisitasComponent;
  let fixture: ComponentFixture<ComponentevisualizarAutobusesyvisitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentevisualizarAutobusesyvisitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentevisualizarAutobusesyvisitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
