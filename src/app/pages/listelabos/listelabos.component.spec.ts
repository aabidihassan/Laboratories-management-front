import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListelabosComponent } from './listelabos.component';

describe('ListelabosComponent', () => {
  let component: ListelabosComponent;
  let fixture: ComponentFixture<ListelabosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListelabosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListelabosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
