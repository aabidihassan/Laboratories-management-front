import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlaboComponent } from './newlabo.component';

describe('NewlaboComponent', () => {
  let component: NewlaboComponent;
  let fixture: ComponentFixture<NewlaboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewlaboComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewlaboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
