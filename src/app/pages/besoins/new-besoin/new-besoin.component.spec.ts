import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBesoinComponent } from './new-besoin.component';

describe('NewBesoinComponent', () => {
  let component: NewBesoinComponent;
  let fixture: ComponentFixture<NewBesoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBesoinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewBesoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
