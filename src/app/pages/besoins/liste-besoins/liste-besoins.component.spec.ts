import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBesoinsComponent } from './liste-besoins.component';

describe('ListeBesoinsComponent', () => {
  let component: ListeBesoinsComponent;
  let fixture: ComponentFixture<ListeBesoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeBesoinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeBesoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
