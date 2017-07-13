import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpharmacyComponent } from './allpharmacy.component';

describe('AllpharmacyComponent', () => {
  let component: AllpharmacyComponent;
  let fixture: ComponentFixture<AllpharmacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllpharmacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllpharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
