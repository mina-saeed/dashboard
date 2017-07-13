import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {allusers} from './allusers.component';

describe('MyNewComponentComponent', () => {
  let component: allusers;
  let fixture: ComponentFixture<allusers>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ allusers ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(allusers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
